import Image from "next/image";
import { Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const teamMembers = [
  {
    name: "Fiona McAllister",
    role: "Owner & Founder",
    bio: "Fiona opened The Haven in 2019 after years baking with her grandmother in the Highlands. She believes a good café is about more than coffee — it's about making people feel at home.",
  },
  {
    name: "Calum Reid",
    role: "Head Barista",
    bio: "Calum knows every bean by name. He's been pulling shots since he was sixteen and can talk about coffee origins for hours. Ask him about his latest pour-over experiment.",
  },
  {
    name: "Ailsa Graham",
    role: "Head Chef",
    bio: "Ailsa trained in Edinburgh kitchens before joining The Haven. She sources locally, cooks seasonally, and makes the best tattie scones in Newhaven — hands down.",
  },
  {
    name: "Rory Mackenzie",
    role: "Barista & All-Rounder",
    bio: "Rory will greet you with a smile and remember your usual. When he's not making flat whites, he's experimenting with latte art and testing new cake recipes.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our People
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Meet the team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            The Haven Café is small, but the people behind it are mighty. Every
            coffee poured, every plate served, and every smile comes from a team
            that genuinely loves what they do.
          </p>
        </div>

        {/* Team photo */}
        <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl shadow-lg">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/gallery/team-photo.png"
              alt="The Haven Café team and interior"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col rounded-2xl border border-border/40 bg-card p-8 text-center transition-all hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-105">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}