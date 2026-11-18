import { Plus } from "lucide-react";
import { faqs } from "@/data/home";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="bg-bg py-20 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div id="faq-heading">
          <SectionHeading
            eyebrow="FAQ"
            title="Common"
            accent="Questions"
            intro="Quick answers about how buying from Stridez Hockey Sales works."
          />
          <p className="mt-6 text-ink/75">
            Still have a question?{" "}
            <a href={site.phoneHref} className="font-semibold text-electric hover:underline">
              Call {site.phone}
            </a>
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-2xl bg-white shadow-[0_8px_24px_-16px_rgba(6,28,56,0.35)] ring-1 ring-navy/5 open:ring-electric/30">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ice-light text-navy transition-transform duration-300 group-open:rotate-45 group-open:bg-electric group-open:text-white">
                    <Plus className="size-4" aria-hidden />
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-ink/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
