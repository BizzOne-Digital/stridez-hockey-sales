import Image from "next/image";
import { Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-ice-texture relative isolate flex flex-col overflow-hidden text-white lg:block">
      {/* Equipment visual: right side on desktop, below text on mobile */}
      <div className="relative order-2 h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]">
        <Image
          src="/images/hero/hero-gear.webp"
          alt="Navy hockey skate, gloves, helmet, puck and carbon stick on the ice"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="animate-drift object-cover object-center [mask-image:linear-gradient(to_bottom,transparent,black_20%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_30%)]"
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/40 to-transparent" />

      <Container className="relative order-1 flex flex-col justify-center pt-14 lg:min-h-[600px] lg:py-24">
        <div className="max-w-xl">
          <h1 className="animate-fade-up font-display-it text-5xl sm:text-6xl lg:text-7xl">
            <span className="block text-white">Stridez Hockey Sales</span>
            <span className="mt-1 block text-ice">For All Your Hockey Needs</span>
          </h1>
          <span className="animate-fade-up mt-7 block h-1 w-24 rounded-full bg-electric" style={{ animationDelay: "120ms" }} />
          <p className="animate-fade-up mt-7 text-lg leading-relaxed text-white/90 sm:text-xl" style={{ animationDelay: "180ms" }}>
            An online hockey equipment retailer with over 15 years in business, offering high-end hockey gear at great prices.
          </p>
          <div className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "260ms" }}>
            <Button href="/products">
              <ShoppingCart className="size-5" aria-hidden /> Explore Products
            </Button>
            <Button href="/contact" variant="outline">
              <Mail className="size-5" aria-hidden /> Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
