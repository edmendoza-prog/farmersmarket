import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

type RegisterPayload = {
  email?: string;
  password?: string;
  full_name?: string;
  role?: "buyer" | "farmer";
};

export async function POST(request: Request) {
  try {
    const allowAdminRegistration = process.env.NODE_ENV !== "production" || process.env.ALLOW_ADMIN_SIGNUP === "true";

    if (!allowAdminRegistration) {
      return NextResponse.json({ error: "Registration is disabled" }, { status: 403 });
    }

    const body = (await request.json()) as RegisterPayload;
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const fullName = body.full_name ? String(body.full_name).trim() : null;
    const role = body.role === "farmer" ? "farmer" : "buyer";

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }

    const supabase = createSupabaseAdminClient();

    const { data: created, error: createError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        role,
      },
    });

    if (createError || !created.user) {
      const message = createError?.message ?? "Unable to create account";
      const status = /already registered|already exists|duplicate/i.test(message) ? 409 : 400;
      return NextResponse.json({ error: message }, { status });
    }

    const { error: profileError } = await supabase.from("profiles").upsert({
      id: created.user.id,
      full_name: fullName,
      role,
    });

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 500 });
    }

    return NextResponse.json({ userId: created.user.id }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err && typeof err === "object" && "message" in err ? String((err as Record<string, unknown>)["message"]) : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
