import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { ProductCategoryCard } from "@/components/products/ProductCategoryCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Hockey Equipment",
  description:
    "Browse hockey sticks, professional skates and protective gear from Stridez Hockey Sales. Contact us for current pricing and availability.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Products"
        title="Hockey"
        accent="Equipment"
        intro="High-end hockey gear for recreational players, experienced athletes and teams, at great prices."
      />
      <section className="bg-bg py-20 md:py-24">
        <Container>
          <SectionHeading
            title="Shop by"
            accent="Category"
            intro="Stock and pricing change often, so we confirm current availability and the best price directly with you. Choose a category and send us a quick inquiry."
            center
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 100}>
                <ProductCategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA
        title="Looking for Something Specific?"
        text="Tell us the brand, size or model you need and we will check availability and pricing for you."
      />
    </>
  );
}
