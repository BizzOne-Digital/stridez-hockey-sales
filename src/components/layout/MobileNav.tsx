"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid size-12 place-items-center rounded-lg text-navy hover:bg-ice-light"
      >
        <Menu className="size-7" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          "bg-ice-texture fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col p-6 text-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display-it text-2xl uppercase">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-12 place-items-center rounded-lg hover:bg-white/10"
          >
            <X className="size-7" />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-8 flex flex-col">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b border-white/10 py-4 font-display-it text-3xl uppercase transition-colors hover:text-ice",
                  active && "text-ice",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-3">
          <a href={site.phoneHref} className="btn-gradient flex min-h-12 items-center justify-center gap-2 rounded-lg font-semibold">
            <Phone className="size-5" aria-hidden /> Call {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-white/70 font-semibold hover:bg-white hover:text-navy"
          >
            <Mail className="size-5" aria-hidden /> Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
