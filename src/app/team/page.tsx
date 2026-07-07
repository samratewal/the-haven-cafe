import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Heart, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { cafeInfo } from "@/lib/cafe-data";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the friendly faces behind The Haven Café in Newhaven, Edinburgh — our owner, baristas, and chef who make every visit special.",
};

const teamMembers = [
  {
    name: "Fiona McAllister",
    role: "Owner & Founder",
    bio: "Fiona opened The Haven in 2019 after years baking with her grandmother in the Highlands. She believes a good café is about more than coffee — it's about making people feel at home.",
  },
  {
    name: "Calum Reid",
    role: "Head Barista",
    bio: "Calum knows every bean by name. He's been pulling shots since he was sixteen and can talk about coffee origins for hours. Ask him about his latest pour-over experiment.",
  },
  {
    name: "Ailsa Graham",
    role: "Head Chef",
    bio: "Ailsa trained in Edinburgh kitchens before joining The Haven. She sources locally, cooks seasonally, and makes the best tattie scones in Newhaven — hands down.",
  },
  {
    name: "Rory Mackenzie",
    role: "Barista & All-Rounder",
    bio: "Rory will greet you with a smile and remember your usual. When he's not making flat whites, he's experimenting with latte art and testing new cake recipes.",
  },
];

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

      {/* Team photo */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/gallery/team-photo.png"
                alt="The Haven Café team and interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col rounded-2xl border border-border/40 bg-card p-8 text-center transition-all hover:shadow-xl"
              >
                {/* Avatar icon */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-105">
                  <Users className="h-12 w-12 text-primary" />
                </div>

                <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
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