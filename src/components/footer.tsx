"use client";

import { useState } from "react";
import { Coffee, MapPin, Phone, AtSign, Send } from "lucide-react";
import { cafeInfo, openingHours } from "@/lib/cafe-data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <Coffee className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading text-lg font-bold">The Haven Café</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A cozy Scandinavian-style café in the heart of Newhaven, Edinburgh.
              Freshly cooked breakfasts, specialty coffee, and a warm welcome.
            </p>
            {/* Newsletter */}
            <div className="pt-2">
              <p className="mb-2 text-sm font-medium">Join our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 min-w-0 flex-1 rounded-lg border border-input bg-transparent px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-primary px-3 text-primary-foreground transition-colors hover:bg-primary/80"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs text-primary">
                  Thanks for subscribing! ☕
                </p>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground transition-colors hover:text-primary">Home</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">About</a>
              </li>
              <li>
                <a href="#menu" className="text-muted-foreground transition-colors hover:text-primary">Menu</a>
              </li>
              <li>
                <a href="#reviews" className="text-muted-foreground transition-colors hover:text-primary">Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground transition-colors hover:text-primary">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Visit Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {cafeInfo.address.line1}
                  <br />
                  {cafeInfo.address.line2}
                  <br />
                  {cafeInfo.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={cafeInfo.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {cafeInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <AtSign className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={cafeInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {cafeInfo.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Opening Hours</h3>
            <ul className="space-y-1.5 text-sm">
              {openingHours.map((entry) => (
                <li key={entry.day} className="flex justify-between">
                  <span className="font-medium">{entry.day.slice(0, 3)}</span>
                  <span className="text-muted-foreground">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-primary">Cookie Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Accessibility</a>
          </div>
          <p>
            © {new Date().getFullYear()} The Haven Café. All rights reserved. Made
            with ☕ in Edinburgh.
          </p>
        </div>
      </div>
    </footer>
  );
}