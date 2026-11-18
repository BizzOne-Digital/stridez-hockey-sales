"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";

/**
 * No backend: on submit this opens the visitor's email app with the message
 * pre-filled and addressed to the business. It never shows a fake "sent" state.
 */
export function ContactForm() {
  const [subject, setSubject] = useState("");
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("subject");
    if (s) setSubject(s);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      f.get("phone") ? `Phone: ${f.get("phone")}` : "",
      "",
      String(f.get("message") ?? ""),
    ]
      .filter((l, i) => l !== "" || i === 3)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const input =
    "mt-2 block w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 transition focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Full Name <span className="text-electric">*</span>
          <input name="name" required autoComplete="name" className={input} placeholder="Your name" />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Email Address <span className="text-electric">*</span>
          <input name="email" type="email" required autoComplete="email" className={input} placeholder="you@example.com" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy">
          Phone Number <span className="font-normal text-ink/50">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={input} placeholder="Your phone number" />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Subject <span className="text-electric">*</span>
          <input
            name="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={input}
            placeholder="What can we help with?"
          />
        </label>
      </div>
      <label className="block text-sm font-semibold text-navy">
        Message <span className="text-electric">*</span>
        <textarea
          name="message"
          required
          rows={6}
          className={input}
          placeholder="Tell us the equipment, brand, size or model you're looking for."
        />
      </label>
      <button
        type="submit"
        className="btn-gradient inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-8 font-semibold text-white shadow-lg shadow-electric/30 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
      >
        <Send className="size-5" aria-hidden /> Send Message
      </button>
      <p className="text-sm text-ink/60" aria-live="polite">
        {opened
          ? `Your email app should now be open with your message ready. Press send there to reach us. If nothing opened, email us directly at ${site.email}.`
          : "Submitting opens your email app with your message pre-filled to our inbox."}
      </p>
    </form>
  );
}
