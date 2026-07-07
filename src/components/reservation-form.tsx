"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2, Users, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-primary" />
        <h3 className="font-heading text-2xl font-bold">Booking Received!</h3>
        <p className="max-w-md text-muted-foreground">
          Thank you, {booking.name || "there"}! We&rsquo;ve received your reservation
          request for {booking.guests} guest{Number(booking.guests) > 1 ? "s" : ""} on{" "}
          {booking.date} at {booking.time}. We&rsquo;ll send a confirmation to{" "}
          {booking.email} shortly.
        </p>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => {
            setSubmitted(false);
            setBooking({ name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" });
          }}
        >
          Make another booking
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={booking.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={booking.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+44 ..."
          value={booking.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> Date
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            min={today}
            value={booking.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time" className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> Time
          </Label>
          <select
            id="time"
            name="time"
            value={booking.time}
            onChange={handleChange}
            required
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests" className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> Guests
          </Label>
          <select
            id="guests"
            name="guests"
            value={booking.guests}
            onChange={handleChange}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
            ))}
            <option value="9+">9+ (large group)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Special Requests (optional)</Label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Allergies, high chair, birthday, etc."
          value={booking.notes}
          onChange={handleChange}
          rows={3}
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-full">
        <CalendarCheck className="mr-2 h-4 w-4" /> Request Booking
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We&rsquo;ll confirm your booking by email within 2 hours during opening times.
      </p>
    </form>
  );
}