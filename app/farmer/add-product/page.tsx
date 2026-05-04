"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function slugify(text: string) {
  return (
    text
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") +
    "-" +
    Date.now().toString().slice(-5)
  );
}

export default function AddProductPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const category = String(formData.get("category") ?? "");
    const price = String(formData.get("price") ?? "");
    const contact = String(formData.get("contact") ?? "");
    const description = String(formData.get("description") ?? "");

    if (!name) return;

    setSubmitting(true);

    const slug = slugify(name);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category, price, contact, description, slug }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Failed to create product:", err);
        setSubmitting(false);
        return;
      }

      router.push("/farmer/dashboard");
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  }

  return (
    <div className="panel p-6 sm:p-8">
      <span className="section-label">Add product</span>
      <h1 className="display-heading mt-4 text-4xl font-semibold text-stone-950">Post a new item for buyers to discover</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
        Keep the form lightweight. The goal is to get your product in front of buyers quickly so they can message you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <Input name="name" label="Product name" placeholder="Example: Harvest tomatoes" />
          <Input name="category" label="Category" placeholder="Vegetables, Fruits, Grains..." />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Input name="price" label="Price" hint="Optional" placeholder="$5.00 / lb" />
          <Input name="contact" label="Contact info" placeholder="Email or phone number" />
        </div>
        <label className="flex flex-col gap-2 text-sm font-medium text-stone-800">
          <span>Description</span>
          <textarea
            name="description"
            rows={6}
            placeholder="Tell buyers what is special about the product, harvesting timing, and pickup notes."
            className="rounded-3xl border border-[var(--border)] bg-white/90 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-stone-800">
          <span>Upload image</span>
          <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 px-4 py-6 text-sm text-emerald-950">
            Drag and drop or click to upload a product image
          </div>
        </label>

        <Button type="submit" disabled={submitting} className="mt-2 w-full sm:w-fit">
          {submitting ? "Submitting…" : "Submit and return to dashboard"}
        </Button>
      </form>
    </div>
  );
}