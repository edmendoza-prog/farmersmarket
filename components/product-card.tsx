"use client";

import Link from "next/link";
import { PinIcon } from "@/components/minimal-icons";
import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
  href: string;
};

export function ProductCard({ product, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-[0_12px_28px_-18px_rgba(0,0,0,0.22)] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.28)]"
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${product.art}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.75),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.32),transparent_22%),linear-gradient(180deg,transparent,rgba(52,37,21,0.18))]" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badge ? (
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              {product.badge}
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold text-stone-950">{product.name}</h3>
        <p className="flex items-center gap-2 text-sm text-stone-500">
          <PinIcon className="h-4 w-4 text-emerald-600" />
          {product.location}
        </p>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xl font-semibold text-emerald-700">{product.price ?? "Price on request"}</span>
          <span className="rounded-full bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white transition group-hover:bg-emerald-700">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}