"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId: string;
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
        async
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: string,
      targetId?: string,
      config?: Record<string, any>
    ) => void;
  }
}
