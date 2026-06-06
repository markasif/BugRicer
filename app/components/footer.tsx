"use client";

import Image from "next/image";
import { ChevronDown, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social icon configuration using inline SVGs due to lack of brand icons in Lucide v1.x
  const socials = [
    {
      label: "Instagram",
      icon: (
        <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "https://instagram.com"
    },
    {
      label: "YouTube",
      icon: (
        <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" className="fill-current" />
        </svg>
      ),
      href: "https://youtube.com"
    },
    {
      label: "WhatsApp",
      icon: (
        <svg
          className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.164-1.355a9.96 9.96 0 004.843 1.258h.005c5.507 0 9.99-4.478 9.99-9.985A9.98 9.98 0 0012.012 2zm5.72 14.15c-.244.688-1.22 1.25-1.684 1.332-.387.07-1.408.384-3.13-.332-1.724-.716-2.92-2.39-3.08-2.61-.16-.22-1.272-1.69-1.272-3.224 0-1.534.8-2.288 1.08-2.588.28-.3.62-.375.82-.375h.58c.18 0 .42-.08.66.48.24.58.82 2.02.9 2.18.08.16.14.36.02.58-.12.22-.18.36-.36.56-.18.2-.38.46-.54.62-.18.18-.36.38-.16.72.2.34.88 1.45 1.88 2.34 1.28 1.14 2.36 1.5 2.7 1.66.34.16.54.12.74-.1.2-.22.86-.98 1.1-1.32.24-.34.48-.28.82-.16.34.12 2.14 1.01 2.5 1.19.36.18.6.26.68.4.08.14.08.8-.16 1.48z" />
        </svg>
      ),
      href: "https://whatsapp.com"
    },
    {
      label: "LinkedIn",
      icon: (
        <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "https://linkedin.com"
    },
    {
      label: "GitHub",
      icon: (
        <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      href: "https://github.com"
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-zinc-900/50 border-t border-gray-200 dark:border-zinc-800 pt-10 pb-10 md:pt-20 md:pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-12 mb-4 md:mb-8">
          <div className="col-span-2 md:col-span-12 lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/Icons/notify.png"
                alt="notify Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl shadow-lg shadow-blue-500/10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                BugRicer <span className="text-blue-600">Notify</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-zinc-400 text-base leading-relaxed max-w-sm">
              Next generation campaign notification engine. Lightning fast, secure, and built for scale.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-800 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Platform
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-zinc-400">
              <li>
                <a href="/#features" className="hover:text-blue-600 transition-colors duration-500">
                  Features
                </a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-blue-600 transition-colors duration-500">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-blue-600 transition-colors duration-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/api-docs" className="hover:text-blue-600 transition-colors duration-500">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-zinc-400">
              <li>
                <a href="/#home" className="hover:text-blue-600 transition-colors duration-500">
                  About
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-blue-600 transition-colors duration-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-blue-600 transition-colors duration-500">
                  Support
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 transition-colors duration-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-zinc-400">
              <li>
                <a href="mailto:info@codoai.in" className="hover:text-blue-600 transition-colors duration-500">
                  info@codoai.in
                </a>
              </li>
              <li>
                <a href="mailto:info@bugricer.com" className="hover:text-blue-600 transition-colors duration-500">
                  info@bugricer.com
                </a>
              </li>
              <li>
                <a href="tel:+918086995559" className="hover:text-blue-600 transition-colors duration-500">
                  +91 8086995559
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-blue-600 transition-colors duration-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-12 lg:col-span-3">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-5 shadow-sm relative">
              <form className="space-y-4">
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">
                  Subscribe for updates & early access to new features.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-2 relative">
                    <div className="relative z-20">
                      <button
                        type="button"
                        className="h-11 px-2 flex items-center justify-between gap-1 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-xs font-bold text-gray-700 dark:text-zinc-300 hover:border-blue-500/50 transition-all min-w-[70px]"
                      >
                        <span className="flex items-center gap-1">
                          <span className="text-sm">🇮🇳</span>
                          <span>+91</span>
                        </span>
                        <ChevronDown className="w-3 h-3 text-zinc-400 shrink-0" />
                      </button>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="00000 00000"
                      className="flex-1 w-full h-11 px-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-650 text-gray-800 dark:text-zinc-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-11 bg-zinc-900 dark:bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-blue-500/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-gray-500 dark:text-zinc-500">
            © {currentYear} <span className="font-bold text-gray-900 dark:text-white">CODO AI Innovations</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8 text-xs font-bold text-gray-400 hover:text-gray-500 dark:text-zinc-500 transition-colors duration-500">
            <a href="/#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              PRIVACY POLICY
            </a>
            <a href="/#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="/#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              REFUND POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
