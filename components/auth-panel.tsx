"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { buttonStyles } from "@/components/ui/button-styles";
import { Input } from "@/components/ui/input";

type Role = "buyer" | "farmer";
type Mode = "login" | "register";

type AuthPanelProps = {
  initialRole: Role;
};

export function AuthPanel({ initialRole }: AuthPanelProps) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>(initialRole);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(role === "farmer" ? "/farmer/dashboard" : "/marketplace");
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
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="hello@market.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </div>

          <Button type="submit" className="w-full">
            {mode === "login" ? "Login" : "Create account"}
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