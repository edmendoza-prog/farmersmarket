import Link from "next/link";
import { farmerStats, products } from "@/lib/data";

export default function FarmerDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="panel p-6 sm:p-8">
        <span className="section-label">Farmer dashboard</span>
        <h1 className="display-heading mt-4 text-4xl font-semibold text-stone-950">Manage your harvest and inquiries</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
          Keep your product list current, surface what is fresh today, and route buyers to direct conversation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/farmer/add-product" className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Add Product
          </Link>
          <Link href="/farmer/products" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/80 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white">
            My Products
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {farmerStats.map((stat) => (
          <div key={stat.label} className="panel-soft p-5">
            <div className="text-sm text-stone-600">{stat.label}</div>
            <div className="mt-3 display-heading text-3xl font-semibold text-stone-950">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="panel p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-stone-950">Recently posted products</h2>
            <p className="mt-1 text-sm text-stone-600">A quick view of what buyers will see first.</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-950">6 active listings</span>
        </div>

        <div className="mt-6 space-y-4">
          {products.slice(0, 4).map((product) => (
            <div key={product.slug} className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-white/80 px-5 py-4">
              <div>
                <div className="font-semibold text-stone-950">{product.name}</div>
                <div className="mt-1 text-sm text-stone-600">
                  {product.category} · {product.location}
                </div>
              </div>
              <div className="text-sm font-semibold text-emerald-900">{product.price ?? "Price on request"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}