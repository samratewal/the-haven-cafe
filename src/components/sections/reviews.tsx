"use client";

import Script from "next/script";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Reviews() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="bg-secondary/20 py-24 sm:py-32">
      {/* Elfsight platform script */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={isVisible ? "animate-fade-in-up" : "opacity-0"}
        >
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Reviews
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Loved by locals &amp; visitors alike
            </h2>
          </div>

          {/* Elfsight Google Reviews widget */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="elfsight-app-6886d1e9-7ea4-4d79-8389-0511857bf19b"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
}