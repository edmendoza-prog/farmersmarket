"use client";

import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

export function Input({ label, hint, className = "", id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <label className="flex w-full flex-col gap-2 text-sm font-medium text-stone-800" htmlFor={inputId}>
      <span className="flex items-center justify-between">
        <span>{label}</span>
        {hint ? <span className="text-xs font-normal text-stone-500">{hint}</span> : null}
      </span>
      <input
        id={inputId}
        className={`rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100 ${className}`}
        {...props}
      />
    </label>
  );
}