/**
 * TyphoonHacks Contact Form Handler
 * Google Apps Script for receiving form submissions and logging to Google Sheets
 *
 * SETUP INSTRUCTIONS: See scripts/google-apps-script/README.md
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

// Email to notify on new inquiries
const INQUIRY_NOTIFICATION_EMAIL = "";

/**
 * Valid inquiry types - must match the values in ContactForm.tsx
 */
const VALID_INQUIRY_TYPES = [
  "general",
  "participant",
  "event-sponsor",
  "industry-partner",
  "school-partnership",
  "mentor-volunteer",
  "other",
];

/**
 * Maximum field lengths to prevent abuse
 */
const MAX_LENGTHS = {
  contactName: 100,
  organization: 200,
  email: 254,
  inquiryType: 50,
  message: 5000,
};

/**
 * Email regex pattern for validation
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ============================================================================
// MAIN HANDLER
// ============================================================================

/**
 * Handles POST requests from the contact form
 * @param {GoogleAppsScript.Events.DoPost} e - The POST event object
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Validate the data
    const validation = validateFormData(data);
    if (!validation.valid) {
      return createJsonResponse(
        {
          success: false,
          error: validation.error,
        },
        400
      );
    }

    // Sanitize the data
    const sanitizedData = sanitizeFormData(data);

    // Log to spreadsheet
    const result = logToSpreadsheet(sanitizedData);

    if (result.success) {
      // Optional: Send email notification
      sendNotificationEmail(sanitizedData);

      return createJsonResponse({
        success: true,
        message: "Form submitted successfully",
        row: result.row,
      });
    } else {
      return createJsonResponse(
        {
          success: false,
          error: "Failed to save submission",
        },
        500
      );
    }
  } catch (error) {
    console.error("Error processing form submission:", error);
    return createJsonResponse(
      {
        success: false,
        error: "Invalid request format",
      },
      400
    );
  }
}

/**
 * Handles GET requests (for testing the endpoint)
 * @returns {GoogleAppsScript.Content.TextOutput} JSON response
 */
function doGet() {
  return createJsonResponse({
    success: true,
    message: "TyphoonHacks Partner Form API is running",
    timestamp: new Date().toISOString(),
  });
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validates the form data
 * @param {Object} data - The form data to validate
 * @returns {Object} Validation result with valid boolean and optional error message
 */
function validateFormData(data) {
  // Check required fields
  if (!data.contactName || typeof data.contactName !== "string") {
    return { valid: false, error: "Name is required" };
  }

  if (!data.email || typeof data.email !== "string") {
    return { valid: false, error: "Email is required" };
  }

  if (!data.inquiryType || typeof data.inquiryType !== "string") {
    return { valid: false, error: "Inquiry type is required" };
  }

  if (
    !data.message ||
    typeof data.message !== "string" ||
    !data.message.trim()
  ) {
    return { valid: false, error: "Message is required" };
  }

  // Validate email format
  if (!EMAIL_REGEX.test(data.email.trim())) {
    return { valid: false, error: "Invalid email format" };
  }

  // Validate inquiry type
  if (!VALID_INQUIRY_TYPES.includes(data.inquiryType)) {
    return { valid: false, error: "Invalid inquiry type" };
  }

  // Validate field lengths
  if (data.contactName.length > MAX_LENGTHS.contactName) {
    return {
      valid: false,
      error: `Name must be less than ${MAX_LENGTHS.contactName} characters`,
    };
  }

  if (
    data.organization &&
    data.organization.length > MAX_LENGTHS.organization
  ) {
    return {
      valid: false,
      error: `Organization must be less than ${MAX_LENGTHS.organization} characters`,
    };
  }

  if (data.email.length > MAX_LENGTHS.email) {
    return {
      valid: false,
      error: `Email must be less than ${MAX_LENGTHS.email} characters`,
    };
  }

  if (data.message && data.message.length > MAX_LENGTHS.message) {
    return {
      valid: false,
      error: `Message must be less than ${MAX_LENGTHS.message} characters`,
    };
  }

  return { valid: true };
}

// ============================================================================
// SANITIZATION
// ============================================================================

/**
 * Sanitizes form data to prevent injection and clean up whitespace
 * @param {Object} data - The raw form data
 * @returns {Object} Sanitized form data
 */
function sanitizeFormData(data) {
  return {
    contactName: sanitizeString(data.contactName),
    organization: sanitizeString(data.organization || ""),
    email: sanitizeString(data.email).toLowerCase(),
    inquiryType: sanitizeString(data.inquiryType),
    message: sanitizeString(data.message || ""),
  };
}

/**
 * Sanitizes a string by trimming whitespace and removing potentially harmful characters
 * @param {string} str - The string to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeString(str) {
  if (!str || typeof str !== "string") return "";

  return str
    .trim()
    .replace(/[\x00-\x1F\x7F]/g, "") // Remove control characters
    .substring(0, 10000); // Hard limit
}

// ============================================================================
// SPREADSHEET OPERATIONS
// ============================================================================

/**
 * Logs the form submission to the active spreadsheet
 * Uses LockService to prevent race conditions with concurrent submissions
 * @param {Object} data - The sanitized form data
 * @returns {Object} Result with success boolean if successful
 */
function logToSpreadsheet(data) {
  // Get a script lock to prevent concurrent execution issues
  const lock = LockService.getScriptLock();

  try {
    // Wait up to 30 seconds to acquire the lock
    lock.waitLock(30000);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Organization",
        "Email",
        "Inquiry Type",
        "Message",
        "Status",
      ]);

      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0d2847");
      headerRange.setFontColor("#00d4ff");
    }

    // Format inquiry type for readability
    const inquiryTypeLabels = {
      general: "General Inquiry",
      participant: "Participant Question",
      "event-sponsor": "Event Sponsor",
      "industry-partner": "Industry Partner",
      "school-partnership": "School/Student Partnership",
      "mentor-volunteer": "Mentor/Volunteer",
      other: "Other",
    };

    // Append the new row
    const timestamp = new Date();
    const newRow = [
      timestamp,
      data.contactName,
      data.organization,
      data.email,
      inquiryTypeLabels[data.inquiryType] || data.inquiryType,
      data.message,
      "New", // Status column for tracking follow-ups
    ];

    sheet.appendRow(newRow);
    const rowNumber = sheet.getLastRow();

    // Auto-resize columns for readability (skip if many rows to improve performance)
    if (rowNumber < 100) {
      sheet.autoResizeColumns(1, 7);
    }

    return { success: true };
  } catch (error) {
    console.error("Error logging to spreadsheet:", error);
    return { success: false, error: error.message };
  } finally {
    // Always release the lock
    lock.releaseLock();
  }
}

// ============================================================================
// EMAIL NOTIFICATION (OPTIONAL)
// ============================================================================

/**
 * Sends an email notification when a new submission is received
 * Uncomment the call in doPost() to enable
 * @param {Object} data - The sanitized form data
 */
function sendNotificationEmail(data) {
  const inquiryTypeLabels = {
    general: "General Inquiry",
    participant: "Participant Question",
    "event-sponsor": "Event Sponsor",
    "industry-partner": "Industry Partner",
    "school-partnership": "School/Student Partnership",
    "mentor-volunteer": "Mentor/Volunteer",
    other: "Other",
  };

  const subject = `[TyphoonHacks] New Inquiry: ${data.contactName}`;
  const body = `
New inquiry received!

Name: ${data.contactName}
Organization: ${data.organization || "Not provided"}
Email: ${data.email}
Inquiry Type: ${inquiryTypeLabels[data.inquiryType] || data.inquiryType}
Organization: ${data.organization || "Not provided"}
Email: ${data.email}
Partnership Type: ${data.partnershipType}

Message:
${data.message || "No message provided"}

---
View all submissions in the Google Sheet.
  `.trim();

  try {
    MailApp.sendEmail(recipient, subject, body);
  } catch (error) {
    console.error("Error sending notification email:", error);
  }
}

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Creates a JSON response with proper headers for CORS
 * @param {Object} data - The response data
 * @param {number} statusCode - HTTP status code (not actually used by Apps Script but for documentation)
 * @returns {GoogleAppsScript.Content.TextOutput} The response object
 */
function createJsonResponse(data, statusCode = 200) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

// ============================================================================
// TEST FUNCTION
// ============================================================================

/**
 * Test inquiryType: "generals working
 * Run this from the Apps Script editor to test
 */
function testSubmission() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        contactName: "Test User",
        organization: "Test Company",
        email: "test@example.com",
        partnershipType: "event-sponsor",
        message: "This is a test submission from the Apps Script editor.",
      }),
    },
  };

  const result = doPost(testData);
  console.log(result.getContent());
}
