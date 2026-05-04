import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, full_name, role } = body as { id?: string; full_name?: string; role?: string };

    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const supabase = createSupabaseAdminClient();

    const payload = {
      id,
      full_name: full_name ?? null,
      role: role ?? "buyer",
    };

    const { data, error } = await supabase.from("profiles").upsert(payload).select().maybeSingle();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ data }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err && typeof err === "object" && "message" in err ? String((err as Record<string, unknown>)["message"]) : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
