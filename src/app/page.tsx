import { ArrowRight, Coffee, Croissant, Clock, MapPin, Heart } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuItems, openingHours } from "@/lib/data";

export default function Home() {
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-accent/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
            ☕ Roasted daily · Baked fresh every morning
          </Badge>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            A cozy haven for
            <br />
            <span className="text-primary">coffee & cake</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Welcome to The Haven Café — a warm little spot in Newhaven, Edinburgh,
            where every cup is poured with care and every bake is made by hand.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/reservations" size="lg" className="rounded-full">
                Book a Table <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/menu" size="lg" variant="outline" className="rounded-full">
              Explore the Menu
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="border-y border-border/40 bg-secondary/20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">Specialty Coffee</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Locally roasted beans, expertly pulled. From flat whites to cold brew.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Croissant className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">Baked Fresh Daily</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Croissants, cinnamon buns, cakes and more — baked in-house every morning.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">A Warm Welcome</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cozy seating, friendly faces, and a place to rest your cup. Everyone&rsquo;s welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Featured menu */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Customer Favourites
          </h2>
          <p className="mt-3 text-muted-foreground">A taste of what&rsquo;s waiting for you</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredItems.map((item) => (
            <Card key={item.name} className="overflow-hidden border-border/40 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-xl">{item.name}</CardTitle>
                  <Badge variant="secondary">{item.price}</Badge>
                </div>
                <CardDescription className="leading-relaxed">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {item.vegetarian && <Badge variant="outline" className="text-xs">🌱 Vegetarian</Badge>}
                  {item.vegan && <Badge variant="outline" className="text-xs">🌿 Vegan</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/menu" variant="outline" size="lg" className="rounded-full">
            See Full Menu <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      {/* Opening hours + location */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Opening Hours</h2>
            </div>
            <ul className="space-y-3">
              {openingHours.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between border-b border-border/40 pb-2">
                  <span className="font-medium">{entry.day}</span>
                  <span className="text-muted-foreground">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold">Find Us</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              9 Anchorfield<br />
              Newhaven, Edinburgh<br />
              EH6 4JG, United Kingdom
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-border/40">
              <iframe
                title="The Haven Café location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-3.1840%2C55.9760%2C-3.1740%2C55.9800&layer=mapnik&marker=55.9780%2C-3.1790"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Come sit a while with us
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Reserve a table for breakfast, lunch, or just a coffee and a slice of cake. Walk-ins welcome too!
        </p>
        <ButtonLink href="/reservations" size="lg" className="mt-6 rounded-full">
          Reserve Your Spot
        </ButtonLink>
      </section>
    </div>
  );
}