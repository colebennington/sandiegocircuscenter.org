/**
 * Tracking utilities for Google Analytics and Meta Pixel events
 * Following Next.js best practices for client-side tracking
 */

// Types for tracking events
export interface TrackingEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface LeadEvent {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}

// Google Analytics tracking
export const trackEvent = (event: TrackingEvent) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    typeof window.gtag === "function"
  ) {
    try {
      window.gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    } catch (error) {
      console.warn("Google Analytics tracking error:", error);
    }
  }
};

// Meta Pixel tracking
export const trackMetaEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (
    typeof window !== "undefined" &&
    window.fbq &&
    typeof window.fbq === "function"
  ) {
    try {
      window.fbq("track", eventName, parameters);
    } catch (error) {
      console.warn("Meta Pixel tracking error:", error);
    }
  }
};

// Combined tracking functions for common events
export const trackFormSubmission = (
  formType: "hero" | "footer",
  formData?: any
) => {
  // Google Analytics
  trackEvent({
    action: "form_submit",
    category: "Lead Generation",
    label: `${formType}_contact_form`,
    value: 1,
  });

  // Meta Pixel - Lead event with enhanced data
  const childAge = formData?.childAge || "unknown";
  trackMetaEvent("Lead", {
    content_name: `${formType}_contact_form`,
    content_category: "circus_classes",
    content_type: "lead_form",
    value: 50, // Estimated lead value
    currency: "USD",
    // Custom parameters for circus center
    custom_data: {
      child_age_group: childAge,
      form_location: formType,
      lead_source: "website",
      program_interest: childAge.includes("5-7")
        ? "petite_cirque"
        : "youth_cirque",
    },
  });

  // Also track as InitiateCheckout for funnel analysis
  trackMetaEvent("InitiateCheckout", {
    content_name: "circus_class_inquiry",
    content_category: "circus_classes",
    value: 50,
    currency: "USD",
  });
};

export const trackButtonClick = (
  buttonType: string,
  buttonLocation: string
) => {
  // Google Analytics
  trackEvent({
    action: "click",
    category: "Button",
    label: `${buttonType}_${buttonLocation}`,
  });

  // Meta Pixel - View Content for enrollment buttons
  if (buttonType.includes("enroll")) {
    trackMetaEvent("ViewContent", {
      content_type: "product",
      content_name: buttonType,
      content_category: "circus_classes",
    });
  }
};

export const trackPhoneCall = (location: string) => {
  // Google Analytics
  trackEvent({
    action: "phone_call",
    category: "Contact",
    label: location,
    value: 1,
  });

  // Meta Pixel
  trackMetaEvent("Contact", {
    content_name: "phone_call",
    content_category: "contact",
  });
};

export const trackEmailClick = (location: string) => {
  // Google Analytics
  trackEvent({
    action: "email_click",
    category: "Contact",
    label: location,
  });

  // Meta Pixel
  trackMetaEvent("Contact", {
    content_name: "email_click",
    content_category: "contact",
  });
};

export const trackScheduleView = (source: string) => {
  // Google Analytics
  trackEvent({
    action: "view_schedule",
    category: "Engagement",
    label: source,
  });

  // Meta Pixel
  trackMetaEvent("ViewContent", {
    content_type: "schedule",
    content_name: "class_schedule",
    content_category: "circus_classes",
  });
};

export const trackSocialClick = (platform: string) => {
  // Google Analytics
  trackEvent({
    action: "social_click",
    category: "Social Media",
    label: platform,
  });

  // Meta Pixel
  trackMetaEvent("ViewContent", {
    content_type: "social",
    content_name: platform,
  });
};

// Enhanced conversion tracking for form completions
export const trackConversion = (
  conversionType: "lead" | "enrollment_interest",
  value?: number
) => {
  // Google Analytics conversion
  trackEvent({
    action: "conversion",
    category: "Goal",
    label: conversionType,
    value: value || 1,
  });

  // Meta Pixel conversion with enhanced tracking
  if (conversionType === "lead") {
    trackMetaEvent("CompleteRegistration", {
      content_name: "lead_form_completed",
      content_category: "circus_classes",
      value: value || 50,
      currency: "USD",
      status: "completed",
    });

    // Track as Purchase for conversion optimization
    trackMetaEvent("Purchase", {
      content_name: "lead_generated",
      content_type: "service",
      value: value || 50,
      currency: "USD",
      content_ids: ["youth_circus_lead"],
      num_items: 1,
    });
  }
};

// Page view tracking (for SPA navigation if needed)
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    typeof window.gtag === "function"
  ) {
    try {
      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      if (gaId) {
        window.gtag("config", gaId, {
          page_path: pagePath,
          page_title: pageTitle,
        });
      }
    } catch (error) {
      console.warn("Google Analytics page view tracking error:", error);
    }
  }
};
