import { categories } from "@/data/categories";
import { CategoryTile } from "@/components/products/ProductCategoryCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Categories() {
  return (
    <section aria-labelledby="categories-heading" className="bg-bg py-16 md:py-20">
      <Container>
        <h2 id="categories-heading" className="sr-only">Featured product categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <CategoryTile category={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
