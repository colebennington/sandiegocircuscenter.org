"use client";

import { trackScheduleView } from "@/utils/tracking";

interface TrackedIframeProps {
  src: string;
  width: string;
  height: string;
  style?: React.CSSProperties;
  allow?: string;
  title: string;
  trackingSource: string;
}

export function TrackedIframe({
  src,
  width,
  height,
  style,
  allow,
  title,
  trackingSource,
}: TrackedIframeProps) {
  const handleLoad = () => {
    trackScheduleView(trackingSource);
  };

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={style}
      allow={allow}
      title={title}
      onLoad={handleLoad}
    />
  );
}
