"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface TallyButtonProps {
  formId?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  emojiText?: string;
  emojiAnimation?: string;
  onClick?: () => void;
}

export const TallyButton: React.FC<TallyButtonProps> = ({
  formId = "kdBxYM",
  children = "Join Waitlist",
  className = "",
  variant = "primary",
  size = "md",
  showIcon = true,
  iconPosition = "right",
  onClick,
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] cursor-pointer select-none group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-full gap-2",
    lg: "text-base px-8 py-3.5 rounded-full gap-2.5 shadow-lg hover:shadow-xl",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:ring-2 hover:ring-blue-400/40 hover:-translate-y-0.5",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-white/80 hover:bg-white text-slate-800 border border-slate-300/80 hover:border-blue-500/50 shadow-sm hover:shadow hover:-translate-y-0.5 backdrop-blur-md",
    white:
      "bg-white hover:bg-slate-50 text-blue-600 font-bold border border-slate-200/80 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  const waitlistUrl = `https://tally.so/r/${formId}?transparentBackground=1&formEventsForwarding=1`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={waitlistUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {showIcon && iconPosition === "left" && (
        <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
      )}
      <span>{children}</span>
      {showIcon && iconPosition === "right" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 text-blue-100" />
      )}
    </a>
  );
};
