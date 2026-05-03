"use client";

import type { ButtonHTMLAttributes } from "react";
import { buttonStyles } from "@/components/ui/button-styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Parameters<typeof buttonStyles>[0];
};

export function Button({ className = "", variant = "primary", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={`${buttonStyles(variant)} ${className}`} {...props} />;
}