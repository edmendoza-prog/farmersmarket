"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeafIcon } from "@/components/minimal-icons";

const links = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-emerald-700">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-700">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-[1.05rem] font-semibold leading-none text-emerald-700">Farmers Marketplace</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = (link.href === "/" && pathname === "/") || pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition ${
                  active ? "font-semibold text-emerald-700" : "text-stone-700 hover:text-emerald-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/auth?role=farmer"
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          Login
        </Link>
      </div>
    </header>
  );
}