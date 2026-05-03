"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { buttonStyles } from "@/components/ui/button-styles";
import { conversations } from "@/lib/data";

export function MessagingInterface() {
  const router = useRouter();
  const defaultConversation = useMemo(() => conversations.find((conversation) => conversation.active) ?? conversations[0], []);
  const [selected, setSelected] = useState(defaultConversation);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(defaultConversation.messages);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = draft.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [...current, { sender: "buyer", text: trimmed }]);
    setDraft("");
  }

  return (
    <div className="page-shell py-10 sm:py-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="section-label">Messaging</span>
          <h1 className="display-heading mt-3 text-4xl font-semibold text-stone-950">Talk directly with the farmer</h1>
        </div>
        <Button variant="secondary" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <aside className="panel overflow-hidden">
          <div className="border-b border-[var(--border)] px-5 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Conversation list</h2>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {conversations.map((conversation) => (
              <button
                key={conversation.buyer}
                type="button"
                onClick={() => {
                  setSelected(conversation);
                  setMessages(conversation.messages);
                  setDraft("");
                }}
                className={`w-full px-5 py-4 text-left transition ${
                  selected.buyer === conversation.buyer ? "bg-emerald-50/90" : "hover:bg-white/80"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-stone-950">{conversation.buyer}</div>
                    <p className="mt-1 line-clamp-1 text-sm text-stone-600">{conversation.lastMessage}</p>
                  </div>
                  <span className="text-xs text-stone-500">{conversation.time}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="panel flex min-h-[640px] flex-col overflow-hidden">
          <div className="border-b border-[var(--border)] px-5 py-4 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-stone-950">{selected.buyer}</h2>
                <p className="text-sm text-stone-600">Reply directly about availability, pickup, and delivery.</p>
              </div>
              <Button variant="secondary" type="button">
                View farmer profile
              </Button>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6 sm:px-6">
            {messages.map((message, index) => (
              <div key={`${message.text}-${index}`} className={`flex ${message.sender === "buyer" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[78%] rounded-[24px] px-4 py-3 text-sm leading-6 shadow-sm ${
                    message.sender === "buyer"
                      ? "bg-emerald-900 text-white"
                      : "bg-white text-stone-800 ring-1 ring-[var(--border)]"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="border-t border-[var(--border)] p-4 sm:p-5">
            <div className="flex gap-3">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Write your inquiry..."
                className="min-h-14 flex-1 rounded-full border border-[var(--border)] bg-white/90 px-5 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}