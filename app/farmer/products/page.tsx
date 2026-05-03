import { products } from "@/lib/data";

export default function FarmerProductsPage() {
  return (
    <div className="panel p-6 sm:p-8">
      <span className="section-label">My products</span>
      <h1 className="display-heading mt-4 text-4xl font-semibold text-stone-950">Product list</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
        Review what is live, edit the listing content later, and keep the store feeling current.
      </p>

      <div className="mt-8 grid gap-4">
        {products.map((product) => (
          <div key={product.slug} className="panel-soft flex flex-wrap items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-4">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${product.art}`} />
              <div>
                <div className="font-semibold text-stone-950">{product.name}</div>
                <div className="mt-1 text-sm text-stone-600">
                  {product.category} · {product.location}
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold text-emerald-900">{product.price ?? "Price on request"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}