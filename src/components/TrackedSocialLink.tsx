"use client";

import { trackSocialClick } from "@/utils/tracking";

interface TrackedSocialLinkProps {
  href: string;
  platform: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export function TrackedSocialLink({
  href,
  platform,
  target,
  rel,
  className,
  children,
}: TrackedSocialLinkProps) {
  const handleClick = () => {
    trackSocialClick(platform);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  );
}
