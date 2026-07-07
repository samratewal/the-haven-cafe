"use client";

import { galleryImages } from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Gallery() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Gallery
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            A peek inside
          </h2>
        </div>

        {/* Masonry grid */}
        <div
          ref={ref}
          className={`gallery-masonry ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white drop-shadow">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}