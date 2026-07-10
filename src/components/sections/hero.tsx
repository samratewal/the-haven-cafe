"use client";

import Image from "next/image";
import { ChevronDown, Coffee, Star } from "lucide-react";
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

      {/* Layered overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
        {/* Location badge */}
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
            <Coffee className="h-4 w-4" />
            Newhaven, Edinburgh
            <span className="h-1 w-1 rounded-full bg-white/50" />
            Open Daily 9–4
          </span>
        </div>

        {/* Rating badge */}
        <div
          className={`mt-4 ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/90 px-3 py-1 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-white" />
            4.7 · 400+ reviews
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`mt-8 max-w-4xl font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
        >
          A warm haven for
          <br />
          <span className="text-sage">coffee &amp; good food</span>
        </h1>

        {/* Description */}
        <p
          className={`mt-6 max-w-xl text-lg leading-relaxed text-white/85 drop-shadow sm:text-xl ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}
        >
          Specialty coffee, freshly cooked breakfasts, and homemade treats in
          a cozy Scandinavian café in the heart of Newhaven.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col gap-3 sm:flex-row ${isVisible ? "animate-fade-in-up stagger-4" : "opacity-0"}`}
        >
          <ButtonLink
            href="#menu"
            size="lg"
            className="rounded-full bg-sage px-8 py-3.5 text-base text-white shadow-lg shadow-sage/30 transition-all hover:bg-sage/85 hover:shadow-xl"
          >
            Explore the Menu
          </ButtonLink>
          <ButtonLink
            href="#location"
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 px-8 py-3.5 text-base text-white backdrop-blur-md transition-all hover:bg-white/15 hover:text-white"
          >
            Find Us
          </ButtonLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1 rounded-full bg-white/60 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}