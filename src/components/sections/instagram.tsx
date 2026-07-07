import { AtSign, ExternalLink } from "lucide-react";
import { cafeInfo } from "@/lib/cafe-data";

export function Instagram() {
  // Grid of food images from Unsplash
  const instaImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd62d7051dc?w=400&q=80",
    "https://images.unsplash.com/photo-1530253266512-8c42e48d6d80?w=400&q=80",
    "https://images.unsplash.com/photo-1485962398705-ef6a13c41ec8?w=400&q=80",
    "https://images.unsplash.com/photo-1485808191679-5f8ed105675e?w=400&q=80",
    "https://images.unsplash.com/photo-1446041925377-c2c035a6a0e5?w=400&q=80",
  ];

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Instagram
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Follow along
          </h2>
          <a
            href={cafeInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-primary"
          >
            <AtSign className="h-5 w-5" />
            <span className="font-medium">{cafeInfo.instagramHandle}</span>
            <ExternalLink className="h-4 w-4 opacity-50" />
          </a>
        </div>

        {/* Image grid */}
        <a
          href={cafeInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {instaImages.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Instagram post ${i + 1} from The Haven Café`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all group-hover:bg-primary/20 group-hover:opacity-100">
                <AtSign className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </a>
      </div>
    </section>
  );
}