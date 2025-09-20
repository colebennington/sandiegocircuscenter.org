"use client";

import { trackButtonClick } from "@/utils/tracking";

interface TrackedButtonProps {
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  trackingData: {
    buttonType: string;
    buttonLocation: string;
  };
}

export function TrackedButton({
  href,
  onClick,
  target,
  rel,
  className,
  style,
  children,
  trackingData,
}: TrackedButtonProps) {
  const handleClick = () => {
    trackButtonClick(trackingData.buttonType, trackingData.buttonLocation);
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
