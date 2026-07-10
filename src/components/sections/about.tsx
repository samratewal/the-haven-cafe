"use client";

import Image from "next/image";
import { Heart, Leaf, Users, Award } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutImage } from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  {
    icon: Heart,
    title: "Made with Care",
    description: "Every dish is cooked to order, every coffee hand-poured. We believe in slow craft over shortcuts.",
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

export function About() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div
            ref={imgRef}
            className={`relative order-2 lg:order-1 ${imgVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={aboutImage}
                alt="Freshly prepared food and coffee at The Haven Café"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border-2 border-primary/20 bg-secondary/50 sm:block animate-float" />
            <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-full bg-accent/50 sm:block animate-float" style={{ animationDelay: "1s" }} />
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`order-1 space-y-6 lg:order-2 ${textVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Story
            </span>
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              A little haven by the harbour
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Haven Café opened its doors in Newhaven with a simple idea: create a
                warm, welcoming space where the coffee is excellent, the breakfasts are
                cooked fresh, and everyone who walks in feels at home.
              </p>
              <p>
                Inspired by Scandinavian café culture, we keep things simple — beautiful
                light, natural materials, and a focus on good food made well. From our
                signature Havenette Spesh to a perfectly poured flat white, everything is
                made with care.
              </p>
              <p>
                Whether you&apos;re stopping in for a quick espresso or settling in with a
                book and a slice of cake, we hope you feel like you&apos;ve found a little
                haven.
              </p>
            </div>
            <div className="pt-2">
              <ButtonLink href="#team" variant="outline" className="rounded-full">
                Meet the team →
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div
          ref={valuesRef}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`rounded-2xl border border-border/40 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-2 ${
                valuesVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 hover:scale-110">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}