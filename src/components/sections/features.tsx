"use client";

import {
  Egg, Utensils, UtensilsCrossed, Wine, Wheat, Leaf, Carrot,
  Wifi, Accessibility, Baby, ShoppingBag, ConciergeBell, ParkingCircle, CreditCard,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/cafe-data";

const iconMap: Record<string, LucideIcon> = {
  Egg, Utensils, UtensilsCrossed, Wine, Wheat, Leaf, Carrot,
  Wifi, Accessibility, Baby, ShoppingBag, ConciergeBell, ParkingCircle, CreditCard,
};

export function Features() {
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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Utensils;
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/40 bg-card p-4 text-center transition-all hover:border-primary/30 hover:shadow-md sm:p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}