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

      {/* Dark overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            ☕ Newhaven, Edinburgh · Open Daily 9–4
          </span>
        </div>

        <h1
          className={`mt-6 max-w-4xl font-heading text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl ${isVisible ? "animate-fade-in-up stagger-1" : "opacity-0"}`}
        >
          A warm haven for
          <br />
          <span className="text-sage">coffee &amp; good food</span>
        </h1>

        <p
          className={`mt-6 max-w-2xl text-lg text-white/90 leading-relaxed drop-shadow sm:text-xl ${isVisible ? "animate-fade-in-up stagger-2" : "opacity-0"}`}
        >
          Specialty coffee, freshly cooked breakfasts, and homemade treats in a
          cozy Scandinavian café in the heart of Newhaven, Edinburgh.
        </p>

        <div
          className={`mt-8 flex flex-col gap-3 sm:flex-row ${isVisible ? "animate-fade-in-up stagger-3" : "opacity-0"}`}
        >
          <ButtonLink href="#menu" size="lg" className="rounded-full px-8 py-3 text-base">
            Explore the Menu
          </ButtonLink>
          <ButtonLink
            href="#contact"
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-white/10 px-8 py-3 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            Find Us
          </ButtonLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/70">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/40 p-1">
            <div className="h-2 w-1 rounded-full bg-white/70 animate-scroll-indicator" />
          </div>
          <ChevronDown className="h-4 w-4 animate-scroll-indicator text-white/70" />
        </div>
      </div>
    </section>
  );
}