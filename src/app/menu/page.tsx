import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { menuItems, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full menu of specialty coffee, freshly baked pastries, breakfast, lunch, and more.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Our Menu</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything is made fresh in-house. Ask us about dietary requirements — we&rsquo;re happy to help.
        </p>
      </div>

      {/* Menu sections */}
      <div className="space-y-14">
        {categories.map((category) => {
          const items = menuItems.filter((item) => item.category === category);
          return (
            <section key={category}>
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-heading text-2xl font-bold">{category}</h2>
                <Separator className="flex-1" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-semibold">{item.name}</h3>
                      <span className="font-medium text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className="mt-1 flex gap-2">
                      {item.vegetarian && (
                        <Badge variant="outline" className="text-xs">🌱 Vegetarian</Badge>
                      )}
                      {item.vegan && (
                        <Badge variant="outline" className="text-xs">🌿 Vegan</Badge>
                      )}
                      {item.featured && (
                        <Badge variant="secondary" className="text-xs">⭐ Favourite</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-16 rounded-lg border border-border/40 bg-secondary/20 p-6 text-center text-sm text-muted-foreground">
        <p>
          Prices include VAT. We offer oat, soy, and almond milk at no extra charge.
          Please inform our staff of any allergies before ordering.
        </p>
      </div>
    </div>
  );
}