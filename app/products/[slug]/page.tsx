import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { buttonStyles } from "@/components/ui/button-styles";
import { products } from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="page-shell py-10 sm:py-14">
        <Link href="/marketplace" className="mb-5 inline-flex text-sm font-semibold text-emerald-900 hover:text-emerald-950">
          ← Back to marketplace
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <section className="panel overflow-hidden">
            <div className={`relative min-h-[420px] bg-gradient-to-br ${product.art}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4),transparent_24%),linear-gradient(180deg,transparent,rgba(52,37,21,0.28))]" />
              <div className="absolute left-6 top-6 flex gap-2">
                {product.badge ? <span className="rounded-full bg-white/85 px-3 py-1 text-sm font-semibold text-emerald-950">{product.badge}</span> : null}
                <span className="rounded-full bg-emerald-950/85 px-3 py-1 text-sm font-semibold text-white">{product.category}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-white">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-white/75">Product preview</div>
                  <h1 className="display-heading mt-2 text-4xl font-semibold">{product.name}</h1>
                </div>
                <div className="rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-stone-900">★ {product.rating}</div>
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <section className="panel space-y-5 p-6">
              <div className="space-y-3">
                <span className="section-label">Product details</span>
                <p className="text-base leading-7 text-stone-600">{product.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-stone-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Farmer</div>
                  <div className="mt-2 font-semibold text-stone-950">{product.farmer}</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Location</div>
                  <div className="mt-2 font-semibold text-stone-950">{product.location}</div>
                </div>
              </div>

              {product.price ? (
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-emerald-900">Price</div>
                  <div className="mt-2 text-xl font-semibold text-emerald-950">{product.price}</div>
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3">
                <Link href="/messages" className={buttonStyles("primary")}>
                  Message Farmer
                </Link>
                <Link href="mailto:farmer@marketplace.com" className={buttonStyles("secondary")}>
                  Contact info
                </Link>
              </div>
            </section>

            <section className="panel-soft p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Community note</div>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Ratings and reviews are shown for trust-building only. Buyers can compare options and reach out directly
                without checking out.
              </p>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}