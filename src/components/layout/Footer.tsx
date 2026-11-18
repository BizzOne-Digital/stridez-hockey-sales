import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="absolute -right-4 top-10 hidden gap-3 md:flex">
        <span className="h-8 w-6 -skew-x-[30deg] bg-electric" />
        <span className="h-8 w-6 -skew-x-[30deg] bg-electric" />
        <span className="h-8 w-40 -skew-x-[30deg] bg-ice" />
      </div>
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link href="/" aria-label="Stridez Hockey Sales home" className="inline-block">
            <Image
              src="/logo/stridez-logo-dark.png"
              alt="Stridez Hockey Sales logo"
              width={1000}
              height={475}
              className="h-20 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{site.description}</p>
          {site.facebook && (
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition-colors hover:bg-electric"
            >
              Follow us on Facebook
            </a>
          )}
        </div>
        <FooterCol title="Quick Links">
          {navItems.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-ice">{n.label}</Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Products">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/products#${c.slug}`} className="hover:text-ice">{c.cta}</Link>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Contact">
          <li>
            <a href={site.phoneHref} className="flex items-center gap-3 hover:text-ice">
              <Phone className="size-4 text-electric" aria-hidden />
              {site.phone}
            </a>
          </li>
          <li>
            <a href={site.emailHref} className="flex items-center gap-3 break-all hover:text-ice">
              <Mail className="size-4 shrink-0 text-electric" aria-hidden />
              {site.email}
            </a>
          </li>
          <li>
            <a href={site.url} className="flex items-center gap-3 hover:text-ice">
              <Globe className="size-4 text-electric" aria-hidden />
              {site.displayUrl}
            </a>
          </li>
        </FooterCol>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display-it text-xl uppercase text-white">{title}</h2>
      <span className="mt-3 block h-0.5 w-10 bg-electric" />
      <ul className="mt-5 space-y-3 text-sm text-white/75">{children}</ul>
    </div>
  );
}
