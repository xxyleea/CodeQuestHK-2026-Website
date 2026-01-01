"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Instagram, Clipboard, AlertCircle } from "lucide-react";
import { contactInfo, linksConfig } from "@/app/config";

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "participant", label: "Participant Question" },
  { value: "event-sponsor", label: "Event Sponsor (resources & support)" },
  { value: "industry-partner", label: "Industry Partner (problem statement)" },
  { value: "school-partnership", label: "School/Student Group Partnership" },
  { value: "mentor-volunteer", label: "Mentor/Volunteer Opportunity" },
  { value: "other", label: "Other" },
];

// Google Apps Script Web App URL - set in environment variable
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    contactName: "",
    organization: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setErrorMessage("");

    // Check if the Google Form URL is configured
    if (!GOOGLE_FORM_URL) {
      console.error("NEXT_PUBLIC_GOOGLE_FORM_URL is not configured");
      setSubmitStatus("error");
      setErrorMessage(
        "Form submission is not configured. Please contact us via email."
      );
      return;
    }

    try {
      // With no-cors mode, we can't read the response body
      // Google Apps Script will process the request server-side
      // We assume success if no error is thrown
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Failed to submit the form. Please try again or contact us via email."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      contactName: "",
      organization: "",
      email: "",
      inquiryType: "",
      message: "",
    });
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {submitStatus === "success" ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="bg-success-teal/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
              <Send className="text-success-teal h-8 w-8" />
            </div>
            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
              Thank You!
            </h3>
            <p className="text-subtle-gray mb-6">
              We&apos;ve received your message and will get back to you shortly.
            </p>
            <button
              onClick={handleReset}
              className="text-electric-cyan hover:text-electric-cyan/80 text-sm underline transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass space-y-6 rounded-2xl p-8"
          >
            {/* Error message */}
            {submitStatus === "error" && (
              <div className="flex items-start gap-3 rounded-lg bg-red-500/10 p-4 text-red-400">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Submission Failed</p>
                  <p className="text-sm opacity-80">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Contact Name */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.contactName}
                  onChange={(e) =>
                    setFormData({ ...formData, contactName: e.target.value })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="text-storm-white mb-2 block text-sm font-medium">
                  Organization
                </label>
                <input
                  type="text"
                  maxLength={200}
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="School, company, or organization (optional)"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-storm-white mb-2 block text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label className="text-storm-white mb-2 block text-sm font-medium">
                What can we help you with? *
              </label>
              <select
                required
                value={formData.inquiryType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    inquiryType: e.target.value,
                  })
                }
                className="bg-ocean-depth border-subtle-gray/30 text-storm-white focus:border-electric-cyan w-full cursor-pointer appearance-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-storm-white mb-2 block text-sm font-medium">
                Message *
              </label>
              <textarea
                rows={5}
                required
                maxLength={5000}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="bg-electric-cyan text-deep-space hover:bg-electric-cyan/90 flex w-full items-center justify-center gap-2 rounded-lg py-4 font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitStatus === "submitting" ? (
                <>
                  <div className="border-deep-space/30 border-t-deep-space h-5 w-5 animate-spin rounded-full border-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>

      {/* Other Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-8"
      >
        <h3 className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
          Other Ways to Reach Us
        </h3>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-electric-cyan/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
              <Mail className="text-electric-cyan h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-storm-white mb-1 font-medium">Email</h4>
              <a
                href={linksConfig.contact.general}
                className="text-electric-cyan hover:text-electric-cyan/80 flex items-center gap-2 transition-colors"
              >
                <span>{contactInfo.email}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(contactInfo.email);
                  }}
                  className="text-electric-cyan hover:text-electric-cyan/80 transition-colors"
                  title="Copy email to clipboard"
                >
                  <Clipboard className="h-4 w-4" />
                </button>
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-4">
            <div className="bg-electric-cyan/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
              <Instagram className="text-electric-cyan h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-storm-white mb-1 font-medium">Instagram</h4>
              <a
                href={linksConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-cyan hover:text-electric-cyan/80 transition-colors"
              >
                @typhoonhackshk
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
