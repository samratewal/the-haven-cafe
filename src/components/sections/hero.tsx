"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { heroImage } from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image with parallax */}
      <div
        ref={ref}
        className="absolute inset-0"
        style={{
          transform: isVisible ? "translateY(0) scale(1.05)" : "translateY(0) scale(1)",
          transition: "transform 0.1s linear",
        }}
      >
        <Image
          src={heroImage}
          alt="The Haven Café — warm Scandinavian café interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/80" />

      {/* Content */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            ☕ Newhaven, Edinburgh · Open Daily 9–4
          </span>
        </div>

        <h1
          className={`mt-6 max-w-4xl font-heading text-5xl font-bold leading-tight tracking-tight text-foreground drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
        >
          A warm haven for
          <br />
          <span className="text-primary">coffee & good food</span>
        </h1>

        <p
          className={`mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
        >
          Specialty coffee, freshly cooked breakfasts, and homemade treats in a
          cozy Scandinavian café in the heart of Newhaven, Edinburgh.
        </p>

        <div
          className={`mt-8 flex flex-col gap-3 sm:flex-row ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}
        >
          <ButtonLink href="#menu" size="lg" className="rounded-full px-6 py-3 text-base">
            Explore the Menu
          </ButtonLink>
          <ButtonLink
            href="#contact"
            size="lg"
            variant="outline"
            className="rounded-full border-primary/30 px-6 py-3 text-base backdrop-blur-sm"
          >
            Find Us
          </ButtonLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-muted-foreground/40 p-1">
            <div className="h-2 w-1 rounded-full bg-muted-foreground animate-scroll-indicator" />
          </div>
          <ChevronDown className="h-4 w-4 animate-scroll-indicator text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}