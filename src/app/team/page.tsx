import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Heart, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { teamMembers, cafeInfo } from "@/lib/cafe-data";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the friendly faces behind The Haven Café in Newhaven, Edinburgh — our owner, baristas, and chef who make every visit special.",
};

export default function TeamPage() {
  return (
    <div className="bg-background">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our People
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Meet the team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              The Haven Café is small, but the people behind it are mighty. Every
              coffee poured, every plate served, and every smile comes from a
              team that genuinely loves what they do.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card transition-all hover:shadow-xl"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role} at The Haven Café`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-t border-border/40 bg-secondary/20 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Coffee className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Craft First</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We obsess over the details so you don&apos;t have to — from bean
                to cup, from kitchen to table.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Made with Heart</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Everything we serve is made fresh, with care, by people who love
                what they do.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Community</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We&apos;re proud to be part of the Newhaven community — your local
                haven by the harbour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Come say hello
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We&apos;d love to welcome you in person. Open daily {cafeInfo.hours}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/#menu" size="lg" className="rounded-full px-8">
              See the Menu
            </ButtonLink>
            <ButtonLink
              href="/#contact"
              size="lg"
              variant="outline"
              className="rounded-full px-8"
            >
              Find Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}