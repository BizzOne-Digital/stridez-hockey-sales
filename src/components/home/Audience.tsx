import Image from "next/image";
import { Trophy, User, Users, UsersRound } from "lucide-react";
import { audiences } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [User, Trophy, Users, UsersRound];

export function Audience() {
  return (
    <section aria-labelledby="audience-heading" className="bg-ice-texture relative overflow-hidden py-20 text-white md:py-24">
      <Image
        src="/images/hero/hero-gear.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <Container className="relative">
        <div id="audience-heading">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Gear for"
            accent="Every Player"
            intro="Whether you play once a week or every day, we help you find quality hockey equipment at a price that works."
            dark
          />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={a.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-ice/50 hover:bg-white/10">
                  <span className="grid size-14 place-items-center rounded-full bg-electric shadow-lg shadow-electric/40 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display-it text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
