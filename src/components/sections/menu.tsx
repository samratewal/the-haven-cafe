"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { menuData, type MenuTab } from "@/lib/cafe-data";

function MenuItemRow({
  name,
  price,
  description,
  note,
  extras,
  vegetarian,
  vegan,
}: {
  name: string;
  price: string;
  description?: string;
  note?: string;
  extras?: { label: string; price: string }[];
  vegetarian?: boolean;
  vegan?: boolean;
}) {
  return (
    <div className="group rounded-xl p-4 transition-colors hover:bg-accent/30">
      <div className="flex items-baseline gap-2">
        <h3 className="font-heading text-base font-semibold">{name}</h3>
        <span className="flex-1 border-b border-dotted border-border/60" />
        <span className="shrink-0 font-medium text-primary">{price}</span>
      </div>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}
      {note && (
        <p className="mt-1 text-xs text-muted-foreground/80 italic leading-relaxed">{note}</p>
      )}
      {extras && extras.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {extras.map((e) => (
            <Badge key={e.label} variant="outline" className="text-xs font-normal">
              {e.label} {e.price}
            </Badge>
          ))}
        </div>
      )}
      {(vegetarian || vegan) && (
        <div className="mt-2 flex gap-1.5">
          {vegetarian && (
            <Badge variant="outline" className="border-sage/30 text-xs text-sage">
              🌱 Vegetarian
            </Badge>
          )}
          {vegan && (
            <Badge variant="outline" className="border-sage/30 text-xs text-sage">
              🌿 Vegan
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Menu
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Freshly cooked, every day
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything is made fresh in-house. Ask us about dietary requirements —
            we&apos;re happy to help.
          </p>
        </div>

        {/* Menu card */}
        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm sm:p-10">
          {/* Tabs */}
          <Tabs defaultValue="Breakfast" className="mx-auto w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="rounded-full p-1">
                {(Object.keys(menuData) as MenuTab[]).map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="rounded-full px-4 py-2 text-sm font-medium"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {(Object.entries(menuData) as [MenuTab, typeof menuData[MenuTab]][]).map(
              ([tabValue, items]) => (
                <TabsContent key={tabValue} value={tabValue}>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                    {items.map((item) => (
                      <MenuItemRow
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        note={item.note}
                        extras={item.extras}
                        vegetarian={item.vegetarian}
                        vegan={item.vegan}
                      />
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>

        {/* Note */}
        <div className="mt-8 rounded-2xl border border-border/40 bg-card p-6 text-center text-sm text-muted-foreground">
          <p>
            Prices include VAT. Oat milk and a range of syrups available — see Extras.
            Please inform our staff of any allergies before ordering.
          </p>
        </div>
      </div>
    </section>
  );
}