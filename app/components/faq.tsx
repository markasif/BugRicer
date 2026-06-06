"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqCategories } from "../data";

export default function Faq() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section id="faq" className="w-full py-12 border-t border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/4 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-zinc-500 text-sm mb-6 leading-relaxed">
              Quick answers to common questions about Notify. For more help, reach out to our team.
            </p>
            <a
              href="mailto:info@codoai.in"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline group cursor-pointer"
            >
              <span>Contact Support</span>
              <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
            </a>
          </div>

          <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-4">
                <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase select-none">
                  {category.title}
                </span>

                <div className="flex flex-col gap-3">
                  {category.items.map((item, itemIdx) => {
                    const itemKey = `${catIdx}-${itemIdx}`;
                    const isOpen = openKey === itemKey;

                    return (
                      <div key={itemIdx} className="flex flex-col transition-all duration-300">
                        <button
                          onClick={() => toggleAccordion(itemKey)}
                          className={`w-full flex items-center justify-between p-4 text-left font-bold text-xs md:text-sm focus:outline-none cursor-pointer transition-all duration-300 shadow-sm border ${
                            isOpen
                              ? "border-blue-500/40 dark:border-blue-500/30 bg-blue-500/[0.04] dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-xl"
                              : "border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#121214]/90 text-zinc-800 dark:text-zinc-200 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700/80"
                          }`}
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            className={`w-4.5 h-4.5 transition-transform duration-300 shrink-0 ml-4 ${
                              isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-zinc-400"
                            }`}
                          />
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen
                              ? "max-h-[220px] opacity-100 mt-2"
                              : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#121214]/50 shadow-sm p-4">
                            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-medium">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
