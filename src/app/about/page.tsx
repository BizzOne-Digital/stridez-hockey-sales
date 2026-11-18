import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, CalendarCheck, HeartHandshake, Tag } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Stridez Hockey Sales is an online hockey equipment retailer with over 15 years in business, offering high-end hockey gear at great prices.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: CalendarCheck, title: "15+ Years of Experience", text: "More than 15 years serving hockey players as an online equipment retailer." },
  { icon: BadgeCheck, title: "Commitment to Quality", text: "We focus on high-end hockey equipment that players can rely on." },
  { icon: Tag, title: "Affordable Premium Gear", text: "Premium equipment at competitive prices, so quality gear is within reach." },
  { icon: HeartHandshake, title: "Customer-Focused", text: "Straight answers and helpful advice so you get the right gear the first time." },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="About Stridez"
        accent="Hockey Sales"
        intro="Over 15 years of helping hockey players find high-end equipment at great prices."
      />

      <section className="bg-white py-20 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="Your Trusted Source for" accent="Quality Hockey Equipment" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                For over 15 years, Stridez Hockey Sales has been helping hockey enthusiasts find high-quality equipment
                at competitive prices. Whether you&apos;re a recreational player or an experienced athlete, our goal is
                to make quality hockey gear more accessible.
              </p>
              <p>
                As an online retailer, we keep things simple: premium sticks, skates and protective gear, honest pricing,
                and direct support when you have questions about what fits your game.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-navy/30">
              <Image
                src="/images/hero/hero-gear.webp"
                alt="Hockey skate, gloves, helmet, puck and stick on the ice"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bg py-20 md:py-24">
        <Container>
          <SectionHeading title="What We" accent="Stand For" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[0_10px_30px_-15px_rgba(6,28,56,0.3)] ring-1 ring-navy/5 transition-transform duration-300 hover:-translate-y-1">
                  <div className="grid size-14 place-items-center rounded-full bg-ice-light text-navy">
                    <Icon className="size-6" strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display-it text-2xl text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
