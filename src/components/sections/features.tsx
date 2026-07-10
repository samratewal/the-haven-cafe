"use client";

import {
  Egg, Utensils, UtensilsCrossed, Wine, Wheat, Leaf, Carrot,
  Wifi, Accessibility, Baby, ShoppingBag, ConciergeBell, ParkingCircle, CreditCard,
  type LucideIcon,
} from "lucide-react";
import { featureCategories } from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const iconMap: Record<string, LucideIcon> = {
  Egg, Utensils, UtensilsCrossed, Wine, Wheat, Leaf, Carrot,
  Wifi, Accessibility, Baby, ShoppingBag, ConciergeBell, ParkingCircle, CreditCard,
};

export function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            What We Offer
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Everyone&apos;s welcome
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From breakfast to lunch, British to Scottish, veggie to vegan — we&apos;ve
            got you covered. Here&apos;s everything you can expect at The Haven.
          </p>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {featureCategories.map((category, i) => {
            const CategoryIcon = iconMap[category.icon] || Utensils;
            return (
              <div
                key={category.title}
                className={`rounded-2xl border border-border/40 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 hover:scale-110">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature) => {
                    const Icon = iconMap[feature.icon] || Utensils;
                    return (
                      <span
                        key={feature.label}
                        className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {feature.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}