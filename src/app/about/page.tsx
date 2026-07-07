import type { Metadata } from "next";
import { Heart, Leaf, Users, Award } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "About",
  description: "The story of The Haven Café — a cozy bakery & café in Newhaven, Edinburgh.",
};

const values = [
  {
    icon: Heart,
    title: "Made with Care",
    description: "Every pastry is hand-shaped, every coffee hand-poured. We believe in slow craft over shortcuts.",
  },
  {
    icon: Leaf,
    title: "Local & Sustainable",
    description: "We source from local Scottish producers and roast our beans in Edinburgh.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "The Haven is a gathering place — for friends, neighbours, and anyone who needs a seat.",
  },
  {
    icon: Award,
    title: "Quality Always",
    description: "From the flour we use to the mugs we pour into, we never compromise on quality.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Our Story
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          The Haven Café opened its doors in 2019 with a simple idea: create a warm,
          welcoming space where the coffee is excellent, the pastries are baked fresh
          every morning, and everyone who walks in feels at home.
        </p>
      </section>

      {/* Story */}
      <section className="mb-16 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          It started with our founder, Fiona, who grew up baking with her grandmother
          in the Scottish Highlands. After years working in busy Edinburgh kitchens,
          she dreamed of opening a small café — the kind with mismatched chairs,
          the smell of butter and sugar, and a counter full of cakes.
        </p>
        <p>
          Newhaven, with its harbour views and tight-knit community, felt like the
          right home. We took over a little shop on Anchorfield, painted the walls
          warm, and started baking. On our first morning, we sold out by 10am.
        </p>
        <p>
          Years later, we&rsquo;re still here — roasting our own beans, rolling croissants
          before sunrise, and greeting our regulars by name. Whether you&rsquo;re stopping
          in for a quick espresso or settling in with a book and a slice of cake,
          we hope you feel like you&rsquo;ve found a little haven.
        </p>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold">What We Believe</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4 rounded-lg border border-border/40 bg-secondary/20 p-6">
              <div className="shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-primary/5 p-10 text-center">
        <h2 className="font-heading text-2xl font-bold">Come visit us</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          We&rsquo;d love to welcome you. Find us in Newhaven, Edinburgh, or book a table ahead.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/reservations" className="rounded-full">
            Book a Table
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" className="rounded-full">
            Contact Us
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}