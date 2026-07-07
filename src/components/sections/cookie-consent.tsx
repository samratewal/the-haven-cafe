"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-border/40 bg-card p-5 shadow-xl sm:flex-row sm:gap-6">
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
        </div>
        <p className="flex-1 text-center text-sm text-muted-foreground sm:text-left">
          We use cookies to improve your experience. By continuing to browse, you
          agree to our use of cookies.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={handleDecline}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Accept
          </button>
          <button
            onClick={() => setShow(false)}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted sm:hidden"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}