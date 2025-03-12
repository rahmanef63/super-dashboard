"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function SmoothScrollLink({
  href,
  children,
  className,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Extract the target ID from the href
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: "smooth",
      });

      // Update URL without reloading the page
      window.history.pushState({}, "", href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
