import { ArrowRight } from "lucide-react";
import { steps } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-white py-20 md:py-24">
      <Container>
        <div id="how-heading">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Your Gear Is"
            accent="Simple"
            intro="No complicated checkout. Tell us what you need and we take it from there."
            center
          />
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <span aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-gradient-to-r from-ice via-electric to-ice md:block" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative list-none text-center">
              <Reveal delay={i * 120}>
                <span className="btn-gradient relative mx-auto grid size-16 place-items-center rounded-full font-display-it text-3xl text-white shadow-lg shadow-electric/40 ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display-it text-2xl uppercase text-navy">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink/75">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/products">
            Browse Categories <ArrowRight className="size-5" aria-hidden />
          </Button>
          <Button href="/contact" variant="outlineDark">
            Send an Inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}
