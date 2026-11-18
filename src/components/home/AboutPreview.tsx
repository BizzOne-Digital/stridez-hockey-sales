import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview" className="bg-bg py-20 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[10/9] overflow-hidden rounded-3xl shadow-2xl shadow-navy/30">
            <Image
              src="/images/about/about-gear.webp"
              alt="Hockey skate and helmet on the ice under arena lights"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="bg-ice-texture absolute -bottom-6 right-4 rounded-2xl px-6 py-4 text-white shadow-xl sm:-right-6">
            <p className="font-display-it text-5xl text-ice">15+</p>
            <p className="text-sm font-semibold uppercase tracking-wider">Years in business</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div id="about-preview">
            <SectionHeading eyebrow="About Us" title="Your Trusted Source for" accent="Quality Hockey Equipment" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            For over 15 years, Stridez Hockey Sales has been helping hockey enthusiasts find high-quality equipment at
            competitive prices. Whether you&apos;re a recreational player or an experienced athlete, our goal is to make
            quality hockey gear more accessible.
          </p>
          <Button href="/about" variant="outlineDark" className="mt-8">
            Learn More About Us <ArrowRight className="size-5" aria-hidden />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
