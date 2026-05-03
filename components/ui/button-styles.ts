const variants = {
  primary:
    "bg-[var(--accent)] text-white shadow-[0_16px_32px_-18px_rgba(75,106,61,0.8)] hover:bg-[var(--accent-strong)]",
  secondary:
    "border border-[var(--border)] bg-white/80 text-stone-800 hover:border-emerald-200 hover:bg-white",
  subtle: "bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
};

export function buttonStyles(variant: keyof typeof variants = "primary") {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-in-out active:scale-[0.97]",
    variants[variant],
  ].join(" ");
}