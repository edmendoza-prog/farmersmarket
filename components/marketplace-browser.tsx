"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchIcon } from "@/components/minimal-icons";
import { categories, type Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

type MarketplaceBrowserProps = {
  products: Product[];
};

export function MarketplaceBrowser({ products }: MarketplaceBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const visibleProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesQuery = [product.name, product.farmer, product.location, product.category]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-stone-950 sm:text-5xl">Marketplace</h1>
          <p className="text-base text-stone-600">Discover fresh produce from local farmers</p>
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
            <SearchIcon className="h-5 w-5" />
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products or farmers..."
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-12 text-base text-stone-800 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-white text-stone-700 shadow-sm ring-1 ring-black/5 hover:text-emerald-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="text-sm text-stone-500">Showing {visibleProducts.length} products</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.slug} product={product} href={`/products/${product.slug}`} />
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="panel-soft mt-8 p-8 text-center text-stone-600">
          No products match this search yet. Try another category or search term.
        </div>
      ) : null}
    </div>
  );
}