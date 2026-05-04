import type { Product } from "@/lib/data";
import { createSupabaseServerClient } from "./server";

function rowToProduct(row: unknown): Product {
  const r = row as Record<string, unknown>;

  return {
    slug: String(r["slug"] ?? ""),
    name: String(r["name"] ?? ""),
    category: (String(r["category"] ?? "") as Product["category"]),
    price: r["price"] == null ? undefined : String(r["price"]),
    farmer: String(r["farmer"] ?? "Unknown"),
    location: String(r["location"] ?? ""),
    description: String(r["description"] ?? ""),
    badge: r["badge"] == null ? undefined : String(r["badge"]),
    rating: Number(r["rating"] ?? 0),
    art: String(r["art"] ?? ""),
  };
}

export async function getProductsFromSupabase(): Promise<Product[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("slug,name,category,price,farmer,location,description,badge,rating,art")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map(rowToProduct) as Product[];
}

export async function getProductBySlugFromSupabase(slug: string): Promise<Product | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("slug,name,category,price,farmer,location,description,badge,rating,art")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) return null;

  return rowToProduct(data as unknown);
}