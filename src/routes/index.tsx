import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Leaf, MessageCircle, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, whatsappOrderLink } from "@/lib/products";
import heroBouquet from "@/assets/hero-bouquet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Craftora — Handmade Woollen Bouquets That Never Wilt" },
      {
        name: "description",
        content:
          "Handwoven woolen flower bouquets, made petal by petal in India. A gift that lasts forever. Order in one tap on WhatsApp.",
      },
      { property: "og:title", content: "Craftora — Handmade Woollen Bouquets That Never Wilt" },
      {
        property: "og:description",
        content:
          "Handwoven woolen flower bouquets, made petal by petal in India. A gift that lasts forever.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "100% Handmade",
  "Never Wilts",
  "Wrapped with Love",
  "Ships Across India",
  "Custom Bouquets",
  "Made to Order",
];

const highlights = [
  {
    icon: HeartHandshake,
    title: "Made by hand",
    text: "Every flower is woven petal by petal — no two bouquets are ever exactly alike.",
  },
  {
    icon: Leaf,
    title: "Never wilts",
    text: "Wool blooms stay fresh forever. A gift that outlives every real bouquet.",
  },
  {
    icon: Truck,
    title: "Delivered with care",
    text: "Each bouquet is wrapped in kraft paper and shipped safely across India.",
  },
];

function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="animate-float-soft absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sage/40 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float-soft absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/60 blur-3xl [animation-delay:1.5s]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-sage px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sage-foreground">
              Handmade woollen bouquets
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Flowers that
              <span className="text-primary"> never wilt</span>, love that never fades
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every Craftora bouquet is woven by hand, petal by petal — a forever gift for
              birthdays, anniversaries, and the people you love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-warm hover:brightness-110"
              >
                Shop Bouquets
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src={heroBouquet}
                alt="Handwoven woolen bouquet with terracotta and cream crocheted flowers wrapped in kraft paper"
                width={1280}
                height={1024}
                className="w-full rounded-[2.5rem] shadow-warm"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card px-5 py-4 shadow-soft">
                <p className="font-display text-2xl font-bold text-primary">500+</p>
                <p className="text-xs font-bold text-muted-foreground">
                  bouquets delivered with love
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="overflow-hidden border-y border-border bg-primary py-3.5" aria-hidden>
        <div className="animate-marquee flex w-max gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-primary-foreground"
            >
              {item}
              <span className="text-primary-foreground/60">✿</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why Craftora */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why a woollen bouquet?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real flowers fade in a week. A Craftora bouquet is stitched to stay beautiful
            for a lifetime.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-sage-foreground">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Loved bouquets
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Our most-ordered pieces — each one made to order, just for you.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:brightness-90"
            >
              View all bouquets
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 120} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 text-center shadow-warm sm:px-16">
            <div
              aria-hidden
              className="animate-float-soft absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl"
            />
            <h2 className="relative text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ordering is as easy as a hello
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-primary-foreground/85">
              Pick a bouquet, tap the WhatsApp button, and tell us where to send it. No
              accounts, no checkout forms — just a friendly chat.
            </p>
            <a
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-bold text-primary transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
