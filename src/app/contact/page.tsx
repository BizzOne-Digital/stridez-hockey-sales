import type { Metadata } from "next";
import { Globe, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Stridez Hockey Sales for hockey equipment pricing, availability and advice. Call ${site.phone} or email ${site.email}.`,
  alternates: { canonical: "/contact" },
};

const cards = [
  { icon: Phone, title: "Call Us", value: site.phone, href: site.phoneHref, note: "Talk to us about the gear you need." },
  { icon: Mail, title: "Email Us", value: site.email, href: site.emailHref, note: "Send us your questions anytime." },
  { icon: Globe, title: "Visit Online", value: site.displayUrl, href: site.url, note: "Your online source for hockey gear." },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Get in"
        accent="Touch"
        intro="Have a question, need product advice, or ready to shop? We're here to help with all your hockey needs."
      />
      <section className="bg-bg py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, value, href, note }, i) => (
              <Reveal key={title} delay={i * 90}>
                <a
                  href={href}
                  className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_10px_30px_-15px_rgba(6,28,56,0.3)] ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:ring-electric/40"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-ice-light text-navy transition-colors group-hover:bg-electric group-hover:text-white">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display-it text-2xl uppercase text-navy">{title}</h2>
                  <p className="mt-2 break-all text-lg font-semibold text-electric">{value}</p>
                  <p className="mt-2 text-sm text-ink/70">{note}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-25px_rgba(6,28,56,0.4)] ring-1 ring-navy/5 lg:grid-cols-[1fr_1.6fr]">
              <div className="bg-ice-texture p-8 text-white md:p-10">
                <h2 className="font-display-it text-4xl uppercase">
                  Send Us a <span className="text-ice">Message</span>
                </h2>
                <span className="mt-4 block h-1 w-16 rounded-full bg-electric" />
                <p className="mt-6 leading-relaxed text-white/85">
                  Tell us what you&apos;re looking for, including brand, size or model if you know it, and we&apos;ll get
                  back to you with availability and pricing.
                </p>
                <p className="mt-6 text-white/85">
                  Prefer to talk?{" "}
                  <a href={site.phoneHref} className="font-semibold text-ice underline-offset-4 hover:underline">
                    Call {site.phone}
                  </a>
                </p>
              </div>
              <div className="p-8 md:p-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
