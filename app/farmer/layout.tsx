import type { ReactNode } from "react";
import Link from "next/link";
import { FarmerSidebar } from "@/components/farmer-sidebar";

export default function FarmerLayout({ children }: { children: ReactNode }) {
  return (
    <main className="page-shell py-6 sm:py-8">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <Link href="/" className="text-sm font-semibold text-emerald-900">
              ← Back home
            </Link>
            <Link href="/marketplace" className="text-sm font-semibold text-stone-600">
              View marketplace
            </Link>
          </div>
          <FarmerSidebar />
        </div>
        <section>{children}</section>
      </div>
    </main>
  );
}