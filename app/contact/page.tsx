"use client";

import { useState } from "react";
import {
  MapPin,
  Info,
  Headphones,
  Globe,
  Phone,
  Clock,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll-top";
import PageHeader from "../components/page-header";
import Faq from "../components/faq";

export default function ContactPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-blue-600/30 selection:text-blue-200 transition-all duration-300"
    >
      <Navbar />

      <main className="flex-1 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-20 sm:pb-32 space-y-20 sm:space-y-32">
          <PageHeader
            badge="Contact Us"
            title={
              <>
                Get in <span className="text-blue-600">Touch</span>
              </>
            }
            description="Have questions about integrating Notify with your ERP or CRM? Our technical team is ready to help you scale your business communication."
            maxDescriptionWidthClass="max-w-2xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Card 1: Our Headquarters */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/80 rounded-3xl p-8 shadow-sm flex flex-col gap-8 text-left hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Headquarters</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      Location
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300 leading-relaxed">
                      CODO AI Innovations,<br />
                      Malappuram District, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 shrink-0">
                    <Info className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      Specialization
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300 leading-relaxed">
                      AI-driven automation and Python-based enterprise solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Direct Support */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/80 rounded-3xl p-8 shadow-sm flex flex-col gap-8 text-left hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-white/5 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full shrink-0" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Direct Support</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      CEO & Lead Developer
                    </span>
                    <div>
                      <a
                        href="https://moajmal.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800 dark:text-zinc-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      >
                        <span>Mohammed Ajmal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                        moajmal.in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      Official Website
                    </span>
                    <div>
                      <a
                        href="https://codoai.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800 dark:text-zinc-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      >
                        <span>codoai.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      Phone / WhatsApp
                    </span>
                    <div>
                      <a
                        href="https://wa.me/918086995559"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800 dark:text-zinc-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      >
                        <span>+91 8086995559</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Business Hours */}
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/80 rounded-3xl p-8 shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-white/5 flex flex-col gap-8 text-left hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-white/5 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-zinc-400 dark:bg-white rounded-full shrink-0" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Business Hours</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white text-purple-600 dark:text-purple-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      Monday – Saturday
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300 leading-relaxed">
                      9:00 AM – 6:00 PM (IST)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white text-purple-600 dark:text-purple-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase select-none">
                      Sunday
                    </span>
                    <p className="text-sm font-semibold text-gray-700 dark:text-zinc-300 leading-relaxed">
                      Closed (Emergency API support available for Enterprise clients)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
        <Faq />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
