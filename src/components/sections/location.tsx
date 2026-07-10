"use client";

import { MapPin, Navigation, Car, Bus, Train, Footprints, Clock } from "lucide-react";
import { cafeInfo, openingHours, transportInfo } from "@/lib/cafe-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Bus,
  Train,
  Footprints,
};

export function Location() {
  // Get today's day name for highlighting
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="location" className="bg-secondary/20 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Find Us
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Come visit The Haven
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Map + Address */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border/40">
              <iframe
                title="The Haven Café location on Google Maps"
                src={cafeInfo.mapEmbed}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{cafeInfo.address.line1}</p>
                  <p className="text-muted-foreground">{cafeInfo.address.line2}</p>
                  <p className="text-muted-foreground">{cafeInfo.address.line3}</p>
                </div>
              </div>
              <a
                href={cafeInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full h-9 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-clip-padding bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 outline-none select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          {/* Right: Hours + Transport */}
          <div className="space-y-6">
            {/* Opening hours */}
            <div className="rounded-2xl border border-border/40 bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold">Opening Hours</h3>
              </div>
              <ul className="space-y-2">
                {openingHours.map((entry) => (
                  <li
                    key={entry.day}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                      entry.day === today
                        ? "bg-primary/10 font-medium"
                        : ""
                    }`}
                  >
                    <span className={entry.day === today ? "text-primary" : ""}>
                      {entry.day}
                      {entry.day === today && (
                        <span className="ml-2 text-xs font-normal text-primary">
                          (Today)
                        </span>
                      )}
                    </span>
                    <span className={entry.day === today ? "text-primary" : "text-muted-foreground"}>
                      {entry.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport */}
            <div className="rounded-2xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold">
                Getting Here
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {transportInfo.map((t) => {
                  const Icon = iconMap[t.icon] || MapPin;
                  return (
                    <div key={t.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{t.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}