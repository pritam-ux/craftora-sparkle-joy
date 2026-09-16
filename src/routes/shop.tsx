import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Handmade Woollen Bouquets — Craftora" },
      {
        name: "description",
        content:
          "Browse handwoven woolen bouquets — roses, sunflowers, lavender, tulips and daisies. Made to order in India, order on WhatsApp.",
      },
      { property: "og:title", content: "Shop Handmade Woollen Bouquets — Craftora" },
      {
        property: "og:description",
        content:
          "Browse handwoven woolen bouquets — roses, sunflowers, lavender, tulips and daisies. Made to order in India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal className="max-w-2xl">
        <p className="mb-3 inline-block rounded-full bg-sage px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sage-foreground">
          The collection
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Every bouquet, woven to order
        </h1>
        <p className="mt-4 text-muted-foreground">
          Choose your favourite and tap “Order on WhatsApp” — we'll confirm availability,
          colours and delivery in one chat. Custom colours are always welcome.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 120} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
