import Link from "next/link";
import { LeafIcon, PeopleIcon, BasketIcon } from "@/components/minimal-icons";

export default function AboutPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1473447190892-4b54b7e0ad6b?auto=format&fit=crop&w=1400&q=80";

  return (
    <main className="bg-[#fbfbf7] text-stone-900">
      <section className="page-shell py-16 text-center sm:py-20">
        <h1 className="text-4xl font-extrabold text-stone-950 sm:text-5xl">About Farmers Marketplace</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">Building bridges between local farmers and communities, one fresh product at a time.</p>
      </section>

      <section className="page-shell grid items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-950">Our Mission</h2>
          <p className="text-stone-600">
            We believe in creating a direct connection between farmers and consumers, eliminating the middleman and ensuring fair prices
            for both parties. Our platform empowers local farmers to reach more customers while providing communities with access to fresh,
            sustainable, and locally-grown produce.
          </p>
        </div>

        <div className="overflow-hidden rounded-[20px] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.18)]">
          <img src={heroImage} alt="Wheat field" className="h-72 w-full object-cover" />
        </div>
      </section>

      <section className="page-shell px-4 py-16">
        <h3 className="mb-8 text-center text-2xl font-bold">Our Values</h3>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
              <LeafIcon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Sustainability</h4>
            <p className="text-sm text-stone-600">Supporting farming practices that protect our environment for future generations.</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
              <PeopleIcon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Community</h4>
            <p className="text-sm text-stone-600">Building stronger local communities through direct farmer-to-consumer relationships.</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
              <BasketIcon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Quality</h4>
            <p className="text-sm text-stone-600">Ensuring only the freshest, highest-quality products reach our customers.</p>
          </div>

          <div className="space-y-3 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
              <LeafIcon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">Accessibility</h4>
            <p className="text-sm text-stone-600">Making farm-fresh produce accessible to everyone in our communities.</p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-700 py-12 text-white">
        <div className="page-shell grid grid-cols-3 gap-6 px-4 text-center">
          <div>
            <div className="text-3xl font-extrabold">500+</div>
            <div className="text-sm">Local Farmers</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">10,000+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">50+</div>
            <div className="text-sm">Communities Served</div>
          </div>
        </div>
      </section>

      <section className="page-shell px-4 py-16 text-center">
        <h3 className="text-2xl font-bold">Join Our Community</h3>
        <p className="mx-auto mt-4 max-w-2xl text-stone-600">Whether you're a farmer looking to reach more customers or a buyer seeking fresh local produce, we're here to help.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/auth?role=farmer" className="rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold">
            Get Started
          </Link>
          <Link href="/marketplace" className="rounded-2xl border border-emerald-600 px-6 py-3 text-emerald-700 font-semibold">
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  );
}
