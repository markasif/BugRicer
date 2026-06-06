"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Sun,
  Moon,
  ChevronRight,
  Menu,
  X,
  LayoutGrid
} from "lucide-react";
import { navLinks } from "../data";
import { useTheme } from "../context/theme-context";
import PromoBanner from "./promo-banner";

interface NavbarProps {
  showBanner?: boolean;
}

export default function Navbar({ showBanner: propShowBanner }: NavbarProps) {
  const [showBannerState, setShowBannerState] = useState(true);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ScrollSpy logic to highlight active section in Navbar (only on homepage)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["home", "features", "solutions", "services", "pricing"];
      const scrollPosition = window.scrollY + 300; // Trigger slightly early

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Smooth scroll handler for homepage
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHomePage) return; // Allow default navigation link on other pages

    e.preventDefault();
    const el = document.getElementById(id);
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

      setActiveSection(id);
    }
  };

  // Lock/Unlock body scroll and toggle sidebar-open class
  useEffect(() => {
    const body = document.body;
    if (isSidebarOpen) {
      body.style.overflow = "hidden";
      body.classList.add("sidebar-open");
    } else {
      body.style.overflow = "";
      body.classList.remove("sidebar-open");
    }
    return () => {
      body.style.overflow = "";
      body.classList.remove("sidebar-open");
    };
  }, [isSidebarOpen]);

  // Close sidebar on pathname change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);



  return (
    <>
      {showBannerState && (
        <PromoBanner onClose={() => setShowBannerState(false)} />
      )}
      <div
        className="fixed left-0 right-0 z-50 flex justify-center md:px-4 pt-[env(safe-area-inset-top)] transition-all duration-300"
        style={{ top: showBannerState ? "36px" : "0px" }}
      >
        <header className="w-full max-w-5xl transition-all duration-500 md:rounded-[24px] border-b md:border py-4 px-8 bg-gray-50/40 dark:bg-zinc-900/40 backdrop-blur-md border-gray-200/20 dark:border-white/5 md:bg-transparent">
          <div className="w-full flex items-center justify-between">
            <a
              href={isHomePage ? "#home" : "/"}
              onClick={(e) => isHomePage && handleNavClick(e, "home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="flex items-center gap-2.5 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Image
                  src="/Icons/notify.png"
                  alt="notify Logo"
                  width={36}
                  height={36}
                  priority
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/10"
                />
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white">
                BugRicer <span className="text-blue-600">Notify</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1 p-1 bg-gray-100/50 dark:bg-zinc-800/30 rounded-2xl">
              {navLinks.map((link) => {
                const isActive = isHomePage
                  ? activeSection === link.id
                  : pathname === link.href;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      if (link.id !== "api-docs" && link.id !== "services" && link.id !== "contact" && isHomePage) {
                        handleNavClick(e, link.id);
                      }
                    }}
                    className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-500 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-gray-150/50 dark:bg-zinc-900"
                        : "text-gray-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-gray-50/50 dark:bg-zinc-900/50 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-500 cursor-pointer"
                title={theme === "dark" ? "Toggle Light Theme" : "Toggle Dark Theme"}
                aria-label={theme === "dark" ? "Toggle Light Theme" : "Toggle Dark Theme"}
              >
                {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              <a
                href="/#pricing"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    handleNavClick(e, "pricing");
                  }
                }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-gray-100 text-white dark:text-zinc-950 rounded-xl text-xs font-bold hover:opacity-90 active:scale-[0.98] transition-all duration-500 shadow-lg"
              >
                <span>Login</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex md:hidden p-2.5 rounded-xl border border-gray-200/50 dark:border-zinc-800/50 bg-gray-50/50 dark:bg-zinc-900/50 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-500 cursor-pointer"
                title="Open Navigation Menu"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {isSidebarOpen && (
        <div
          className="sidebar-overlay fixed inset-0 z-60 bg-zinc-950/60 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-70 w-full max-w-[300px] bg-white dark:bg-zinc-950 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden border-l border-gray-100 dark:border-zinc-900/50 overscroll-behavior-contain ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800/50 pt-[calc(1.5rem+env(safe-area-inset-top))]">
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/notify.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-lg dark:text-white">BugRicer</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 active:scale-95 transition-transform cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  setIsSidebarOpen(false);
                  if (link.id !== "api-docs" && link.id !== "services" && link.id !== "contact" && isHomePage) {
                    handleNavClick(e, link.id);
                  }
                }}
                className="flex items-center gap-4 p-4 rounded-2xl text-base font-semibold text-gray-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
              >
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-900 text-gray-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors">
                  {Icon && <Icon className="w-5 h-5" />}
                </div>
                <span className="flex-1">{link.label}</span>
              </a>
            );
          })}

          <div className="border-t border-gray-100 dark:border-zinc-800/50 my-2" />

          <a
            href="/#pricing"
            onClick={(e) => {
              setIsSidebarOpen(false);
              if (isHomePage) {
                e.preventDefault();
                handleNavClick(e, "pricing");
              }
            }}
            className="flex items-center gap-4 p-4 rounded-2xl text-base font-semibold text-gray-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <span className="flex-1">Login</span>
          </a>
        </div>

        <div className="px-6 py-6 border-t border-gray-100 dark:border-zinc-855/50 bg-gray-50/50 dark:bg-zinc-950/80">
          <p className="text-[10px] font-black text-gray-400 dark:text-zinc-550 tracking-widest uppercase mb-4 text-center">
            Stay Connected
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-850/50 text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-850/50 text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-850/50 text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" className="fill-current" />
              </svg>
            </a>

            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-zinc-900 border border-gray-200/50 dark:border-zinc-800/50 text-gray-700 hover:text-gray-955 dark:text-zinc-400 dark:hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.164-1.355a9.96 9.96 0 004.843 1.258h.005c5.507 0 9.99-4.478 9.99-9.985A9.98 9.98 0 0012.012 2zm5.72 14.15c-.244.688-1.22 1.25-1.684 1.332-.387.07-1.408.384-3.13-.332-1.724-.716-2.92-2.39-3.08-2.61-.16-.22-1.272-1.69-1.272-3.224 0-1.534.8-2.288 1.08-2.588.28-.3.62-.375.82-.375h.58c.18 0 .42-.08.66.48.24.58.82 2.02.9 2.18.08.16.14.36.02.58-.12.22-.18.36-.36.56-.18.2-.38.46-.54.62-.18.18-.36.38-.16.72.2.34.88 1.45 1.88 2.34 1.28 1.14 2.36 1.5 2.7 1.66.34.16.54.12.74-.1.2-.22.86-.98 1.1-1.32.24-.34.48-.28.82-.16.34.12 2.14 1.01 2.5 1.19.36.18.6.26.68.4.08.14.08.8-.16 1.48z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
