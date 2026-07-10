import { ExternalLink } from "lucide-react";
import { cafeInfo } from "@/lib/cafe-data";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

export function Instagram() {
  return (
    <section className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Instagram
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Follow along
          </h2>

        </div>

        {/* Instagram call-to-action card */}
        <a
          href={cafeInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all hover:border-primary/30 hover:shadow-lg sm:p-16">
            {/* Instagram gradient backdrop */}
            <div
              className="absolute inset-0 opacity-[0.07] transition-opacity group-hover:opacity-[0.12]"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            />

            {/* Instagram camera icon with gradient ring */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] shadow-lg transition-transform group-hover:scale-110">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-card">
                <InstagramGlyph className="h-12 w-12 text-foreground" />
              </div>
            </div>

            <div className="relative text-center">
              <p className="font-heading text-2xl font-bold sm:text-3xl">
                Follow us on Instagram
              </p>
              <p className="mt-2 text-muted-foreground">
                Tag your photos{" "}
                <span className="font-medium text-primary">
                  {cafeInfo.instagramHandle}
                </span>{" "}
                — we love seeing your visits!
              </p>
            </div>

            <span className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform group-hover:scale-105">
              <InstagramGlyph className="h-4 w-4" />
              Visit our page
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}