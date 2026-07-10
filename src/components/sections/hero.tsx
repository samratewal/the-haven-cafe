"use client";

import Image from "next/image";
import { Coffee, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { heroImage } from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div ref={ref} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="The Haven Café — warm Scandinavian café interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Rich layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      {/* Warm sage glow accents */}
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-sage/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-sage/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
        {/* Location badge */}
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <span className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:gap-2 sm:px-5 sm:py-2 sm:text-sm">
            <MapPin className="h-3.5 w-3.5 text-sage sm:h-4 sm:w-4" />
            Newhaven, Edinburgh
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="whitespace-nowrap">Mon–Fri 8:30–4 · Sat–Sun 9–4</span>
          </span>
        </div>

        {/* Main title */}
        <h1
          className={`mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
        >
          The Haven Café
        </h1>

        {/* Accent divider */}
        <div
          className={`mt-6 flex items-center gap-3 ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
        >
          <span className="h-px w-12 bg-sage/60" />
          <Coffee className="h-5 w-5 text-sage" />
          <span className="h-px w-12 bg-sage/60" />
        </div>

        {/* Descriptive subtitle */}
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow sm:max-w-2xl sm:text-lg md:text-xl ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}
        >
          A warm haven by the harbour — specialty coffee, freshly cooked
          breakfasts, and homemade treats in a cozy Scandinavian café.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col gap-3 sm:flex-row ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}
        >
          <ButtonLink
            href="#menu"
            size="lg"
            className="rounded-full bg-sage px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sage/40 transition-all hover:bg-sage/85 hover:shadow-xl"
          >
            Explore the Menu
          </ButtonLink>
          <ButtonLink
            href="#location"
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 px-8 py-3.5 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/15 hover:text-white"
          >
            Find Us
          </ButtonLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/25 p-1">
            <div className="h-2 w-1 rounded-full bg-white/50 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}