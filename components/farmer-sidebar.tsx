"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/farmer/dashboard" },
  { label: "My Products", href: "/farmer/products" },
  { label: "Add Product", href: "/farmer/add-product" },
];

export function FarmerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="panel hidden h-fit w-full max-w-[280px] p-4 lg:block">
      <div className="rounded-[24px] bg-emerald-950 px-5 py-5 text-white shadow-[0_20px_40px_-28px_rgba(17,24,39,0.55)]">
        <div className="text-xs uppercase tracking-[0.22em] text-emerald-100">Seller Studio</div>
        <div className="mt-2 display-heading text-2xl font-semibold">Farm Dashboard</div>
        <p className="mt-2 text-sm leading-6 text-emerald-50/85">
          Post your harvest, answer questions, and keep conversations organized.
        </p>
      </div>

      <nav className="mt-4 space-y-2">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                active ? "bg-emerald-50 text-emerald-950" : "text-stone-700 hover:bg-white/70 hover:text-stone-950"
              }`}
            >
              <span>{link.label}</span>
              <span aria-hidden className="text-lg">
                ↗
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-[24px] bg-white/80 p-4 text-sm text-stone-600 ring-1 ring-[var(--border)]">
        <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Tip</div>
        Use the Add Product page to post what is ready today and direct buyers to message you.
      </div>
    </aside>
  );
}