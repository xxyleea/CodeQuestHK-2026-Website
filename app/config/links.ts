/**
 * Centralized configuration for all external links and URLs.
 * Import this file to use consistent links across the application.
 */

export const linksConfig = {
  // Registration & Application
  registration: {
    // Update this URL when registration opens
    // participant: {
    //   label: "Register Now",
    //   link: "/register", // prob a google form or external site
    // },
    participant: {
      label: "Register Now",
      link: "https://forms.gle/a3da5E4WHnTbugaZ6",
    },
    mentor: "/contact",
    volunteer: "/contact",
  },

  social: {
    // github: "https://github.com/typhoonhackshk",
    instagram: "https://instagram.com/typhoonhackshk",
    // linkedin: "https://linkedin.com/company/typhoonhackshk",
    // discord: "https://discord.gg/typhoonhackshk",
  },

  contact: {
    // Maybe we'll have own domain emails later?
    general: "mailto:codequesthk@gmail.com",
    partners: "/contact",
    page: "/contact",
    // phone: "tel:+85212345678",
  },
} as const;

// Helper type for accessing link values
export type LinksConfig = typeof linksConfig;

// Display-friendly versions (for showing in UI, not for href)
export const contactInfo = {
  email: "codequesthk@gmail.com",
  partnerEmail: "codequesthk@gmail.com",
  // phone: "+852 1234 5678",
};
