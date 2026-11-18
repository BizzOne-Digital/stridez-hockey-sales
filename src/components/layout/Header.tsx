"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300",
        scrolled && "shadow-[0_6px_24px_-12px_rgba(6,28,56,0.35)]",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Link href="/" aria-label="Stridez Hockey Sales home" className="shrink-0">
          <Image
            src="/logo/stridez-logo.png"
            alt="Stridez Hockey Sales logo"
            width={1000}
            height={475}
            priority
            className="h-14 w-auto lg:h-[72px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 text-[16px] font-semibold text-navy transition-colors hover:text-electric",
                  "after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-left after:rounded-full after:bg-electric after:transition-transform after:duration-300",
                  active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/products"
          className="btn-gradient hidden min-h-12 items-center gap-2 rounded-lg px-6 font-semibold text-white shadow-lg shadow-electric/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-electric/50 lg:inline-flex"
        >
          <ShoppingCart className="size-5" aria-hidden /> Explore Products
        </Link>

        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}
