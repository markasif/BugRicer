"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
      title="Scroll to Top"
      aria-label="Scroll to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
