"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/cafe-data";

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Good to know
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Got a question? Here are the things we get asked most. Can&apos;t find
            what you&apos;re looking for? Just give us a call.
          </p>
        </div>

        <Accordion className="rounded-2xl border border-border/40 bg-card px-4 sm:px-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}