export type Category = {
  slug: string;
  title: [string, string];
  short: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
};

export const categories: Category[] = [
  {
    slug: "sticks",
    title: ["Hockey", "Sticks"],
    short: "Shop Sticks",
    description:
      "High-performance hockey sticks designed for control, precision, and powerful shots.",
    image: "/images/categories/sticks.webp",
    alt: "Close-up of a carbon composite hockey stick on the ice",
    cta: "Hockey Sticks",
  },
  {
    slug: "skates",
    title: ["Professional", "Skates"],
    short: "Shop Skates",
    description:
      "Quality hockey skates built for comfort, agility, and performance.",
    image: "/images/categories/skates.webp",
    alt: "Navy and white professional hockey skate on the ice",
    cta: "Hockey Skates",
  },
  {
    slug: "protective-gear",
    title: ["Protective", "Gear"],
    short: "Shop Gear",
    description:
      "Premium protective equipment to help players stay comfortable and protected.",
    image: "/images/categories/gear.webp",
    alt: "Pair of navy hockey gloves resting on the ice",
    cta: "Protective Gear",
  },
];

export function inquiryHref(topic: string) {
  const subject = encodeURIComponent(`Pricing inquiry: ${topic}`);
  return `/contact?subject=${subject}`;
}
