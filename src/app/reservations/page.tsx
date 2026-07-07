import type { Metadata } from "next";
import { CalendarCheck, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReservationForm } from "@/components/reservation-form";
import { openingHours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book a table at The Haven Café in Edinburgh. Reserve your spot for breakfast, lunch, or coffee.",
};

export default function ReservationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CalendarCheck className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Book a Table
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Reserve your spot at The Haven Café. We can&rsquo;t wait to host you.
        </p>
      </div>

      {/* Form */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Reservation Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ReservationForm />
        </CardContent>
      </Card>

      {/* Info note */}
      <div className="mt-8 flex items-start gap-3 rounded-lg border border-border/40 bg-secondary/20 p-5 text-sm text-muted-foreground">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div>
          <p className="font-medium text-foreground">Good to know</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Tables are held for 15 minutes past the booking time</li>
            <li>For groups of 9+, please call us directly</li>
            <li>Walk-ins welcome — but weekends get busy!</li>
          </ul>
        </div>
      </div>

      {/* Hours reminder */}
      <div className="mt-6 rounded-lg border border-border/40 p-5">
        <h3 className="mb-3 font-heading text-lg font-semibold">Opening Hours</h3>
        <ul className="space-y-2 text-sm">
          {openingHours.map((entry) => (
            <li key={entry.day} className="flex justify-between">
              <span className="font-medium">{entry.day}</span>
              <span className="text-muted-foreground">{entry.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}