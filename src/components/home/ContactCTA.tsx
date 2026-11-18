import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function ContactCTA({
  title = "Get in Touch Today",
  text = "Have a question, need product information, or ready to find your next piece of hockey equipment? Contact Stridez Hockey Sales today.",
}: {
  title?: string;
  text?: string;
}) {
  const items = [
    { icon: Phone, label: site.phone, href: site.phoneHref, sr: "Call" },
    { icon: Mail, label: site.email, href: site.emailHref, sr: "Email" },
    { icon: Globe, label: site.displayUrl, href: site.url, sr: "Website" },
  ];
  return (
    <section aria-labelledby="cta-heading" className="bg-ice-texture relative overflow-hidden text-white">
      <Image
        src="/images/backgrounds/puck.webp"
        alt=""
        width={600}
        height={375}
        sizes="380px"
        className="pointer-events-none absolute -right-16 -top-6 hidden w-[380px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)] lg:block"
      />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="cta-heading" className="font-display-it text-4xl sm:text-5xl">{title}</h2>
            <span className="mt-4 block h-1 w-20 rounded-full bg-electric" />
          </div>
          <p className="max-w-xl text-lg text-white/85">{text}</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/20">
          {items.map(({ icon: Icon, label, href, sr }) => (
            <li key={label} className="md:px-6 md:first:pl-0">
              <a href={href} className="group flex items-center gap-4 rounded-xl py-2 text-base font-semibold transition-colors hover:text-ice sm:text-lg">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-electric shadow-lg shadow-electric/40 transition-transform group-hover:scale-110">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="sr-only">{sr}: </span>
                <span className="[overflow-wrap:anywhere]">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
