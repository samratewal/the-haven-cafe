"use client";

import { galleryImages } from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Gallery() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="bg-secondary/20 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Gallery
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            A peek inside
          </h2>
        </div>

        {/* Bento grid */}
        <div
          ref={ref}
          className="gallery-bento grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl ${img.span || ""} ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}