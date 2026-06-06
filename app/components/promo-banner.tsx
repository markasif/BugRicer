import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface PromoBannerProps {
  onClose: () => void;
}

export default function PromoBanner({ onClose }: PromoBannerProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  // Timer state (starting from 26 days, 11 hours, 48 minutes, 45 seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 26,
    hours: 11,
    minutes: 48,
    seconds: 45
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Banner scroll-based visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 10) {
        setIsBannerVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsBannerVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsBannerVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetAccessClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHomePage = window.location.pathname === "/";
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById("pricing");
      if (el) {
        const offset = 90; // account for navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div
      className={`promo-banner fixed top-0 left-0 right-0 z-60 bg-blue-600 text-white text-[10px] sm:text-[11px] font-sans font-bold h-9 flex items-center justify-center gap-2 sm:gap-4 px-4 shadow-lg transition-transform duration-300 ease-in-out ${
        isBannerVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >

      <div className="absolute top-0 bottom-0 left-full w-10 bg-inherit" />

      <div className="flex items-center gap-2">
        <span className="uppercase tracking-wider">Launch Discount: 20% OFF</span>
      </div>
      <div className="h-3 w-px bg-white/20 hidden sm:block"></div>
      <div className="flex gap-2 tabular-nums opacity-90">
        <span>{timeLeft.days}d</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
      </div>
      <div className="h-3 w-px bg-white/20 hidden sm:block"></div>
      <div>
        <a
          href="/#pricing"
          onClick={handleGetAccessClick}
          className="bg-white text-blue-600 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-black uppercase hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
        >
          Get Access
        </a>
      </div>
      <button
        onClick={onClose}
        className="absolute right-3 hover:opacity-75 cursor-pointer"
        aria-label="Close Announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
