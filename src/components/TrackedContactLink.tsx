"use client";

import { trackPhoneCall, trackEmailClick } from "@/utils/tracking";

interface TrackedContactLinkProps {
  href: string;
  type: "phone" | "email";
  location: string;
  className?: string;
  children: React.ReactNode;
}

export function TrackedContactLink({
  href,
  type,
  location,
  className,
  children,
}: TrackedContactLinkProps) {
  const handleClick = () => {
    if (type === "phone") {
      trackPhoneCall(location);
    } else if (type === "email") {
      trackEmailClick(location);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
