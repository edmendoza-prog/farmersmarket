import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function SvgShell({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <SvgShell className={className}>
      <path d="M5 14c0-5 4-9 10-9h4v4c0 6-4 10-9 10-3 0-5-2-5-5Z" />
      <path d="M9 15c2-2 5-4 8-5" />
      <path d="M8 19V8" />
    </SvgShell>
  );
}

export function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <SvgShell className={className}>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </SvgShell>
  );
}

export function PinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <SvgShell className={className}>
      <path d="M12 21s5-4.4 5-9a5 5 0 0 0-10 0c0 4.6 5 9 5 9Z" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </SvgShell>
  );
}

export function PeopleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <SvgShell className={className}>
      <path d="M16 18v-1.5a3.5 3.5 0 0 0-3.5-3.5h-1A3.5 3.5 0 0 0 8 16.5V18" />
      <circle cx="12" cy="8" r="3" />
      <path d="M20 18v-1a3 3 0 0 0-2.3-2.9" />
      <path d="M17.5 8.5a2.5 2.5 0 1 1 0 5" />
    </SvgShell>
  );
}

export function BasketIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <SvgShell className={className}>
      <path d="m4 10 2 9h12l2-9" />
      <path d="M3 10h18" />
      <path d="M8 10 12 4l4 6" />
    </SvgShell>
  );
}