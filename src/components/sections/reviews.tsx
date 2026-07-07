"use client";

import { Star, Quote } from "lucide-react";
import {
  reviewBreakdown,
  reviewRatings,
  testimonials,
  cafeInfo,
} from "@/lib/cafe-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function StarRating({ rating, size = "h-5 w-5" }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${size} ${i <= rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Reviews
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by locals & visitors alike
          </h2>
        </div>

        {/* Rating overview */}
        <div
          ref={ref}
          className={`mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 rounded-3xl border border-border/40 bg-card p-8 md:grid-cols-2 lg:p-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {/* Left: Score + breakdown */}
          <div className="flex flex-col items-center justify-center gap-4 border-b border-border/40 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <div className="text-6xl font-bold font-heading text-primary">
              {cafeInfo.rating}
            </div>
            <StarRating rating={5} />
            <p className="text-sm text-muted-foreground">
              Based on {cafeInfo.reviewCount} reviews
            </p>
            <p className="text-xs text-muted-foreground/70">
              {cafeInfo.ranking}
            </p>
          </div>

          {/* Right: Breakdown bars */}
          <div className="space-y-3 md:pl-8">
            {reviewBreakdown.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-20 text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: isVisible ? `${item.percentage}%` : "0%", transition: "width 1s ease-out" }}
                  />
                </div>
                <span className="w-8 text-right text-sm text-muted-foreground">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating categories */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {reviewRatings.map((rating) => (
            <div
              key={rating.label}
              className="rounded-2xl border border-border/40 bg-card p-5 text-center"
            >
              <div className="text-3xl font-bold text-foreground">
                {rating.score}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {rating.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="absolute right-6 top-6">
                <Quote className="h-10 w-10 text-primary/15" />
              </div>
              <StarRating rating={t.rating} size="h-4 w-4" />
              <p className="text-sm text-foreground/90 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-border/30 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.date} · {t.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}