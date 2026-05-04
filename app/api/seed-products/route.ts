import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { products as staticProducts } from "@/lib/data";

export async function POST() {
  try {
    const supabase = createSupabaseAdminClient();

    const rows = staticProducts.map((p) => ({
      slug: p.slug,
      name: p.name,
      category: p.category,
      price: p.price,
      farmer: p.farmer,
      location: p.location,
      description: p.description,
      badge: p.badge ?? null,
      rating: p.rating ?? null,
      art: p.art ?? null,
    }));

    // onConflict must be a comma-separated string, not a string array.
    const { data, error } = await supabase.from("products").upsert(rows, { onConflict: "slug" }).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ inserted: data?.length ?? 0 });
  } catch (err: unknown) {
    const message =
      err && typeof err === "object" && "message" in err
        ? String((err as Record<string, unknown>)["message"])
        : String(err);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
