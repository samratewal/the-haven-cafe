import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { contactInfo, openingHours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Haven Café in Edinburgh. Find us, call us, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Questions, feedback, or just want to say hello? We&rsquo;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading text-xl">
                <MapPin className="h-5 w-5 text-primary" /> Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{contactInfo.address}</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-border/40">
                <iframe
                  title="The Haven Café location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-3.1840%2C55.9760%2C-3.1740%2C55.9800&layer=mapnik&marker=55.9780%2C-3.1790"
                  className="h-56 w-full"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading text-xl">
                <Phone className="h-5 w-5 text-primary" /> Phone & Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading text-xl">
                <Clock className="h-5 w-5 text-primary" /> Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {openingHours.map((entry) => (
                  <li key={entry.day} className="flex justify-between text-sm">
                    <span className="font-medium">{entry.day}</span>
                    <span className="text-muted-foreground">{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact form */}
        <div>
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}