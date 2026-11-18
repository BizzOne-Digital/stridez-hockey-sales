import { CalendarCheck, Handshake, Swords, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  { icon: Swords, title: ["Premium", "Equipment"], text: "High-quality hockey equipment from trusted brands." },
  { icon: Handshake, title: ["Trusted", "Service"], text: "Helpful, reliable service focused on customer satisfaction." },
  { icon: Tag, title: ["Great", "Prices"], text: "Competitive pricing on premium hockey equipment." },
  { icon: CalendarCheck, title: ["15+ Years", "in Business"], text: "Over 15 years of experience serving hockey equipment customers." },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div aria-hidden className="absolute -left-10 top-0 h-40 w-24 -skew-x-[25deg] bg-gradient-to-b from-ice to-electric opacity-80" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[300px_1fr]">
        <Reveal>
          <h2 id="why-heading" className="font-display-it text-4xl uppercase text-navy sm:text-5xl">
            Why Choose
            <span className="block text-electric">Stridez</span>
            <span className="block text-electric">Hockey Sales?</span>
          </h2>
        </Reveal>
        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-navy/10">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title[0]} delay={i * 90} className="px-5 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-ice-light text-navy ring-8 ring-ice-light/50 transition-transform duration-300 hover:scale-110">
                <Icon className="size-7" strokeWidth={1.8} aria-hidden />
              </div>
              <h3 className="mt-5 font-display-it text-2xl text-navy">
                {title[0]}
                <br />
                {title[1]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
