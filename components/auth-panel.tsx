"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { buttonStyles } from "@/components/ui/button-styles";
import { Input } from "@/components/ui/input";
import { supabaseBrowser } from "@/lib/supabase/client";

type Role = "buyer" | "farmer";
type Mode = "login" | "register";

type AuthPanelProps = {
  initialRole: Role;
};

export function AuthPanel({ initialRole }: AuthPanelProps) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>(initialRole);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authNotice, setAuthNotice] = useState("");
  const [signupCooldownSeconds, setSignupCooldownSeconds] = useState(0);

  useEffect(() => {
    if (signupCooldownSeconds <= 0) return;

    const timer = window.setInterval(() => {
      setSignupCooldownSeconds((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [signupCooldownSeconds]);

  function handleAuthError(error: { message?: string; status?: number }, currentMode: Mode) {
    const message = String(error.message ?? "").toLowerCase();
    const isRateLimited = error.status === 429 || message.includes("rate limit");

    if (isRateLimited) {
      setSignupCooldownSeconds(60);
      setAuthError("Too many attempts right now. Please wait about a minute before trying again.");
      return;
    }

    if (message.includes("invalid login credentials")) {
      setAuthError("Invalid email or password. Check your credentials and try again.");
      return;
    }

    if (message.includes("email not confirmed")) {
      setAuthError("Please confirm your email first, then log in.");
      return;
    }

    setAuthError(
      currentMode === "register"
        ? "Unable to create account right now. Please try again."
        : "Unable to sign in right now. Please try again."
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthError("");
    setAuthNotice("");

    if (mode === "register" && signupCooldownSeconds > 0) {
      setAuthError(`Please wait ${signupCooldownSeconds}s before creating another account.`);
      return;
    }

    setLoading(true);

    try {
      if (mode === "register") {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            full_name: name,
            role,
          }),
        });

        if (!response.ok) {
          const payload = (await response.json().catch(() => ({}))) as { error?: string };
          const message = payload.error ?? "Unable to create account right now.";

          console.error("Sign up error", message);
          handleAuthError({ message, status: response.status }, mode);
          return;
        }

        const { error: signInError } = await supabaseBrowser.auth.signInWithPassword({ email, password });

        if (signInError) {
          console.error("Sign in error", signInError);
          handleAuthError(signInError, "login");
          setAuthNotice("Account created. Please log in.");
          setMode("login");
          return;
        }

        router.push(role === "farmer" ? "/farmer/dashboard" : "/marketplace");
      } else {
        const { error } = await supabaseBrowser.auth.signInWithPassword({ email, password });

        if (error) {
          console.error("Sign in error", error);
          handleAuthError(error, mode);
          return;
        }

        router.push(role === "farmer" ? "/farmer/dashboard" : "/marketplace");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-6">
          <span className="section-label">Login / Register</span>
          <div className="space-y-4">
            <h1 className="display-heading max-w-xl text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              Choose your role and connect with the people who need your harvest.
            </h1>
            <p className="max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
              Buyers can explore local products, and farmers can list inventory and answer inquiries without a payment
              system getting in the way.
            </p>
          </div>

          <div className="panel-soft grid gap-3 p-5 text-sm text-stone-700 sm:grid-cols-2">
            <div>
              <div className="font-semibold text-stone-950">Buyer</div>
              <p className="mt-1 leading-6">Browse, filter, and message growers directly.</p>
            </div>
            <div>
              <div className="font-semibold text-stone-950">Farmer</div>
              <p className="mt-1 leading-6">Post products, manage inquiries, and keep ownership of the sale.</p>
            </div>
          </div>
        </div>

        <form className="panel space-y-6 p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="flex rounded-full border border-[var(--border)] bg-white/80 p-1">
            {(["login", "register"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === item ? "bg-emerald-900 text-white" : "text-stone-600 hover:bg-emerald-50"
                }`}
              >
                {item === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          <div className="grid gap-3 rounded-3xl bg-stone-50 p-3 sm:grid-cols-2">
            {(["buyer", "farmer"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRole(item)}
                className={`rounded-2xl px-4 py-3 text-left transition ${
                  role === item ? "bg-white shadow-sm ring-1 ring-emerald-200" : "text-stone-600 hover:bg-white/80"
                }`}
              >
                <div className="text-sm font-semibold text-stone-950">{item === "buyer" ? "Buyer" : "Farmer"}</div>
                <div className="mt-1 text-sm leading-6 text-stone-600">
                  {item === "buyer" ? "Explore products and message growers." : "List produce and manage requests."}
                </div>
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            <Input
              name="full_name"
              label="Name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="hello@market.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>

          {authError ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">{authError}</div>
          ) : null}

          {authNotice ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{authNotice}</div>
          ) : null}

          <Button type="submit" className="w-full" disabled={loading || (mode === "register" && signupCooldownSeconds > 0)}>
            {loading
              ? "Please wait..."
              : mode === "register" && signupCooldownSeconds > 0
                ? `Try again in ${signupCooldownSeconds}s`
                : mode === "login"
                  ? "Login"
                  : "Create account"}
          </Button>

          <button
            type="button"
            onClick={() => setMode((current) => (current === "login" ? "register" : "login"))}
            className={buttonStyles("subtle") + " w-full"}
          >
            {mode === "login" ? "Need an account? Switch to register" : "Already have an account? Switch to login"}
          </button>
        </form>
      </div>
    </div>
  );
}