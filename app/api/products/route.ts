import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, category, price, description, slug, farmer_profile_id, location, badge, art } = body;

    if (!name || !slug) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = createSupabaseAdminClient();

    const insertPayload = {
      slug,
      name,
      category: category ?? null,
      price: price ?? null,
      farmer_profile_id: farmer_profile_id ?? null,
      location: location ?? null,
      description: description ?? null,
      badge: badge ?? null,
      rating: null,
      art: art ?? null,
    };

    const { data, error } = await supabase.from("products").insert(insertPayload).select().maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err && typeof err === "object" && "message" in err ? String((err as Record<string, unknown>)["message"]) : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
