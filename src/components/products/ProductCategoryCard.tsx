import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import type { Category } from "@/data/categories";
import { inquiryHref } from "@/data/categories";

/** Compact card used on the homepage, styled after the reference design. */
export function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      href={`/products#${category.slug}`}
      className="group relative flex h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-white via-ice-light to-[#cfe6f5] shadow-[0_10px_30px_-15px_rgba(6,28,56,0.35)] ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-18px_rgba(0,159,227,0.55)]"
    >
      <div className="relative z-10 flex w-1/2 flex-col justify-center p-6">
        <h3 className="font-display-it text-3xl text-navy">
          {category.title[0]}
          <br />
          {category.title[1]}
        </h3>
        <span className="mt-4 block h-1 w-12 rounded-full bg-electric transition-all duration-500 group-hover:w-20" />
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
          <span className="grid size-7 place-items-center rounded-full border-2 border-navy transition-colors group-hover:border-electric group-hover:bg-electric group-hover:text-white">
            <ArrowRight className="size-3.5" aria-hidden />
          </span>
          {category.short}
        </span>
      </div>
      <div className="absolute inset-y-0 right-0 w-[58%]">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110 [mask-image:linear-gradient(to_right,transparent,black_35%)]"
        />
      </div>
    </Link>
  );
}

/** Larger card used on the Products page, with description and inquiry CTA. */
export function ProductCategoryCard({ category }: { category: Category }) {
  return (
    <article
      id={category.slug}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-15px_rgba(6,28,56,0.35)] ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-18px_rgba(0,159,227,0.5)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ice-light">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h2 className="font-display-it text-3xl uppercase text-navy">
          {category.title[0]} <span className="text-electric">{category.title[1]}</span>
        </h2>
        <span className="mt-4 block h-1 w-12 rounded-full bg-electric" />
        <p className="mt-4 flex-1 leading-relaxed text-ink/75">{category.description}</p>
        <p className="mt-4 text-sm font-semibold text-navy/70">Pricing and availability on request.</p>
        <Link
          href={inquiryHref(category.cta)}
          className="btn-gradient mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 font-semibold text-white shadow-lg shadow-electric/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageSquare className="size-5" aria-hidden /> Contact for Pricing
        </Link>
      </div>
    </article>
  );
}
