import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Menu } from "@/components/sections/menu";
import { Features } from "@/components/sections/features";
import { Reviews } from "@/components/sections/reviews";
import { TeamSection } from "@/components/sections/team";
import { Instagram } from "@/components/sections/instagram";
import { Gallery } from "@/components/sections/gallery";
import { FAQ } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Features />
      <Instagram />
      <Location />
      <Reviews />
      <FAQ />
      <TeamSection />
      <Contact />
    </>
  );
}