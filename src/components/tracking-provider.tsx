"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { trackPageView } from "@/utils/tracking";

interface TrackingContextType {
  isInitialized: boolean;
}

const TrackingContext = createContext<TrackingContextType>({
  isInitialized: false,
});

export function useTracking() {
  return useContext(TrackingContext);
}

interface TrackingProviderProps {
  children: ReactNode;
}

export function TrackingProvider({ children }: TrackingProviderProps) {
  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname, document.title);

    // Set up enhanced ecommerce tracking for circus classes
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      typeof window.gtag === "function"
    ) {
      try {
        const gaId = process.env.NEXT_PUBLIC_GA_ID;
        if (gaId) {
          window.gtag("config", gaId, {
            // Enhanced ecommerce for service-based business
            custom_map: {
              custom_parameter_1: "child_age_group",
              custom_parameter_2: "class_type",
            },
            // Track user engagement
            engagement_time_msec: 30000,
            // Track file downloads, outbound links, etc.
            link_attribution: true,
          });
        }
      } catch (error) {
        console.warn("Google Analytics config error:", error);
      }
    }

    // Set up Meta Pixel custom events for circus center
    if (
      typeof window !== "undefined" &&
      window.fbq &&
      typeof window.fbq === "function"
    ) {
      try {
        // Track custom events for circus center
        window.fbq("trackCustom", "ViewYouthPrograms");
      } catch (error) {
        console.warn("Meta Pixel custom event error:", error);
      }
    }
  }, []);

  const contextValue: TrackingContextType = {
    isInitialized: true,
  };

  return (
    <TrackingContext.Provider value={contextValue}>
      {children}
    </TrackingContext.Provider>
  );
}
