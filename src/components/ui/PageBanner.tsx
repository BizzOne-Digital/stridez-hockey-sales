import Image from "next/image";
import { Container } from "./Container";

export function PageBanner({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent: string; intro: string }) {
  return (
    <section className="relative overflow-hidden bg-ice-texture text-white">
      <Image
        src="/images/hero/hero-gear.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right opacity-30 md:opacity-45 [mask-image:linear-gradient(to_right,transparent_15%,black_70%)]"
      />
      <Container className="relative py-20 md:py-28">
        <p className="animate-fade-up mb-3 text-sm font-bold uppercase tracking-[0.2em] text-ice">{eyebrow}</p>
        <h1 className="animate-fade-up font-display-it text-5xl sm:text-6xl md:text-7xl" style={{ animationDelay: "80ms" }}>
          {title} <span className="text-ice">{accent}</span>
        </h1>
        <span className="mt-6 block h-1 w-20 rounded-full bg-electric" />
        <p className="animate-fade-up mt-6 max-w-xl text-lg text-white/85" style={{ animationDelay: "160ms" }}>{intro}</p>
      </Container>
    </section>
  );
}
