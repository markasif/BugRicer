"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionHeader from "./section-header";
import { pricingPlans } from "../data";
import dynamic from "next/dynamic";

const ConnectModal = dynamic(() => import("./connect-modal"), {
  ssr: false,
});

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Free Trial");



  return (
    <section id="pricing" className="w-full py-6 md:py-8">
      <SectionHeader
        title="Flexible Pricing Plans"
        description="Choose the plan that best fits your messaging needs. Instant setup."
      >
          <div className="relative flex p-1.5 bg-gray-100 dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-inner overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto">
            <div
              className={`absolute top-1.5 left-1.5 w-[calc(50%-6px)] h-[calc(100%-12px)] dark:bg-zinc-700 rounded-xl shadow-md z-0 transition-transform duration-200 ease-in-out ${
                billingCycle === "yearly" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 flex-1 py-2.5 text-sm font-bold transition-colors rounded-xl flex items-center justify-center whitespace-nowrap cursor-pointer ${
                billingCycle === "monthly"
                  ? "text-blue-600 dark:text-white"
                  : "text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative z-10 flex-1 py-2.5 text-sm font-bold transition-colors rounded-xl flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                billingCycle === "yearly"
                  ? "text-blue-600 dark:text-white"
                  : "text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              }`}
            >
              <span>Yearly</span>
              <span className="px-1.5 py-0.5 text-[9px] bg-green-500 text-white rounded-md font-black uppercase tracking-wider">
                Save 17%
              </span>
            </button>
          </div>
   
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
        {pricingPlans.map((plan) => {
          const isPro = plan.type === "pro";
          const isBusiness = plan.type === "business";

          return (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 w-[90%] mx-auto ${
                isPro
                  ? "bg-zinc-950 dark:bg-gray-50 border-blue-600 shadow-2xl shadow-blue-500/10 scale-105 z-10 hover:scale-[1.07]"
                  : isBusiness
                  ? "bg-gray-50 dark:bg-gradient-to-b dark:from-zinc-900 dark:via-[#111] dark:to-black border border-[#D4AF37]/50 shadow-[0_15px_60px_-15px_rgba(212,175,55,0.4)] hover:shadow-[0_25px_80px_-15px_rgba(212,175,55,0.5)] z-20 hover:-translate-y-2 group backdrop-blur-2xl"
                  : "bg-gray-50 dark:bg-zinc-900 border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-500/30"
              }`}
            >
              {isBusiness && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-20 dark:opacity-30">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FCF6BA] to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#BF953F] to-transparent rounded-full blur-3xl" />
                </div>
              )}

              {plan.badge && (
                isBusiness ? (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.6)] backdrop-blur-md">
                    {plan.badge}
                  </span>
                ) : (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg bg-blue-600 text-white shadow-blue-600/30">
                    {plan.badge}
                  </span>
                )
              )}

              <div className="mb-2">
                <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${isPro ? "text-white dark:text-zinc-950" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium mb-2 ${
                  isPro 
                    ? "text-blue-500/80" 
                    : isBusiness 
                    ? "text-amber-500/80" 
                    : "text-blue-500/80"
                }`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <div className={`text-sm font-bold text-gray-500 mb-[-4px]${
                  isPro 
                    ? "text-white/70 dark:text-zinc-500/70" 
                    : "text-zinc-400 dark:text-zinc-500"
                }`}>
                  <span className="line-through">₹{plan.strikethrough[billingCycle]}</span>
                  <span className="ml-2 rounded text-blue-500/80">
                    ({plan.discount})
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className={`text-xl font-bold mr-1 ${
                    isPro 
                      ? "text-blue-400 dark:text-blue-600" 
                      : isBusiness 
                      ? "text-[#D4AF37]" 
                      : "text-blue-600 dark:text-blue-400"
                  }`}>
                    ₹
                  </span>
                  <span className={`text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B38728] via-[#D4AF37] to-[#996515] dark:from-[#BF953F] dark:via-[#FCF6BA] dark:to-[#B38728] drop-shadow-sm font-black tabular-nums ${
                    isPro 
                      ? "text-white dark:text-zinc-950" 
                      : isBusiness 
                      ? "text-[#D4AF37]" 
                      : "text-gray-900 dark:text-white"
                  }`}>
                    {plan.price[billingCycle]}
                  </span>
                  <span className={`text-xs ml-2 ${
                    isPro 
                      ? "text-zinc-400 dark:text-zinc-500" 
                      : "text-gray-500 dark:text-zinc-400"
                  }`}>
                    /mo
                  </span>
                </div>
              </div>

              <p className={`my-6 text-sm leading-relaxed text-gray-500 dark:text-zinc-400 ${
                isPro 
                  ? "text-zinc-300 dark:text-zinc-600" 
                  : "text-gray-600 dark:text-zinc-400"
              }`}>
                {plan.description}
              </p>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs">
                      <Check className={`w-5 h-5 shrink-0 p-1 rounded-full ${
                        isPro 
                          ? "text-blue-400 dark:text-blue-600 bg-blue-50" 
                          : isBusiness 
                          ? "bg-gradient-to-br from-[#D4AF37]/20 to-white dark:to-black text-[#D4AF37] border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-sm" 
                          : "text-blue-500 dark:text-blue-400 bg-blue-600/10"
                      }`} />
                      <span className={`text-sm font-medium text-gray-600 dark:text-zinc-400
                        ${isPro 
                          ? "text-zinc-200 dark:text-zinc-800" 
                          : "text-gray-700 dark:text-zinc-300"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {isBusiness ? (
                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-4 rounded-xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-black uppercase tracking-wider hover:from-[#E0AA3E] hover:to-[#996515] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] border border-[#F9F295]/40 transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                >
                  {plan.cta}
                </button>
              ) : isPro ? (
                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-4 rounded-xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-transparent cursor-pointer"
                >
                  {plan.cta}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-4 rounded-xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 cursor-pointer"
                >
                  {plan.cta}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 dark:bg-zinc-800/50 border border-blue-500/20 dark:border-zinc-700/50 backdrop-blur-md shadow-sm">
          Launch Offer: <span className="text-blue-400 font-bold">Flat 20% Off</span> on all plans! Limited time only.
        </div>
      </div>
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName={selectedPlan} />
    </section>
  );
}
