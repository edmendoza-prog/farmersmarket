import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { BasketIcon, LeafIcon, PeopleIcon } from "@/components/minimal-icons";
import { buttonStyles } from "@/components/ui/button-styles";
import { featuredProducts } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

const heroImage =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80";

const featureCards = [
  {
    title: "Fresh & Organic",
    description: "Get the freshest organic produce directly from local farms, harvested at peak ripeness.",
    icon: LeafIcon,
  },
  {
    title: "Support Local",
    description: "Connect directly with farmers in your community and support sustainable agriculture.",
    icon: PeopleIcon,
  },
  {
    title: "Easy to Use",
    description: "Browse products, contact farmers directly, and arrange pickup or delivery with ease.",
    icon: BasketIcon,
  },
];

const footerLinks = ["Browse Products", "Sell on Platform", "About Us"];
const supportLinks = ["Help Center", "Contact Us", "Privacy Policy"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fbfbf7] text-stone-900">
        <section className="page-shell grid items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Fresh from Farm to You <LeafIcon className="inline-block h-10 w-10 align-middle text-emerald-600" />
              </h1>
              <p className="max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
                Connect directly with local farmers and enjoy the freshest produce your community has to offer.
                Support sustainable farming while getting the best quality ingredients.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/marketplace" className={buttonStyles("primary")}>
                Browse Products <span aria-hidden>→</span>
              </Link>
              <Link href="/auth?role=farmer" className={buttonStyles("secondary")}>
                Start Selling
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.45)]">
            <img
              src={heroImage}
              alt="Colorful produce at a farmers market"
              className="h-[360px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </section>

        <section className="page-shell px-4 pb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-stone-950 sm:text-4xl">Why Choose Our Marketplace?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <div key={card.title} className="rounded-[24px] bg-[#eff9ed] p-8 text-center shadow-[0_18px_60px_-40px_rgba(0,0,0,0.28)]">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/10">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-stone-950">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 bg-white py-20">
          <div className="page-shell px-4">
            <div className="mb-10 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-stone-950 sm:text-4xl">Featured Products</h2>
              <Link href="/marketplace" className="flex items-center gap-2 font-medium text-emerald-700 hover:text-emerald-800">
                View All <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProducts.map((product, index) => (
                <div key={product.slug} className="overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_18px_50px_-36px_rgba(0,0,0,0.32)]">
                  <div className="relative h-80 overflow-hidden bg-stone-100">
                    <img
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
                          : index === 1
                            ? "https://images.unsplash.com/photo-1564093497595-593b96d80180?auto=format&fit=crop&w=1200&q=80"
                            : "https://images.unsplash.com/photo-1519183071298-a2962be96f83?auto=format&fit=crop&w=1200&q=80"
                      }
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white shadow-md">
                      Fresh Today
                    </span>
                  </div>

                  <div className="space-y-3 p-5">
                    <h3 className="text-xl font-semibold text-stone-950">{product.name}</h3>
                    <p className="flex items-center gap-2 text-sm text-stone-500">
                      <span className="inline-flex items-center text-emerald-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mr-1 h-4 w-4" aria-hidden="true">
                          <path d="M12 21s5-4.4 5-9a5 5 0 0 0-10 0c0 4.6 5 9 5 9Z" />
                          <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
                        </svg>
                        {product.farmer}
                      </span>
                    </p>
                    <div className="flex items-center justify-between gap-4 pt-1">
                      <span className="text-2xl font-bold text-emerald-700">{product.price ?? "Price on request"}</span>
                      <Link
                        href={`/products/${product.slug}`}
                        className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-700 py-20 text-white">
          <div className="page-shell px-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-emerald-50/90">
              Join our community of farmers and buyers today. Fresh produce is just a click away!
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/marketplace" className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-[#1f1a17] py-16 text-stone-300">
          <div className="page-shell grid gap-12 px-4 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-emerald-400">
                <LeafIcon className="h-7 w-7" />
                <span className="text-xl font-semibold">Farmers Marketplace</span>
              </div>
              <p className="max-w-md leading-7 text-stone-400">
                Connecting local farmers with buyers, bringing fresh produce from farm to your table.
              </p>
              <p className="text-sm text-stone-400">support@farmersmarket.com</p>
              <p className="text-sm text-stone-400">Serving communities nationwide</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-stone-400">
                {footerLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="mt-5 space-y-3 text-stone-400">
                {supportLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="page-shell mt-12 border-t border-white/5 px-4 pt-6 text-center text-sm text-stone-500">
            © 2026 Farmers Marketplace. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}