"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { stepCards, features, stats, solutions } from "./data";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import SectionHeader from "./components/section-header";
import FeatureCard from "./components/feature-card";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StepCard from "./components/step-card";
import ScrollToTop from "./components/scroll-top";
import dynamic from "next/dynamic";

const ConnectModal = dynamic(() => import("./components/connect-modal"), {
  ssr: false,
});

export default function Home() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-blue-600/30 selection:text-blue-200 transition-all duration-300"
    >
      <Navbar />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-12 pb-12 md:pb-12">
            <section
              id="home"
              className="pt-24 sm:pt-32 lg:pt-32 text-center space-y-8 max-w-4xl mx-auto animate-in fade-in duration-1000 px-4 sm:px-0"
            >
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none animate-pulse-glow" />

              <div className="flex flex-col items-center" style={{ opacity: 1, transform: "none" }}>
                <Image
                  alt="BugRicer Logo"
                  width={80}
                  height={80}
                  priority
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-[16px] sm:rounded-[20px] shadow-2xl shadow-blue-500/20 animate-bounce-slow"
                  src="/Icons/notify.png"
                />
                
                <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-4 sm:mt-6 leading-[1.1]">
                  Next-Gen <span className="text-(--accent-emerald)">WhatsApp</span> API
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-400 mt-6 sm:mt-8 max-w-3xl text-center mx-auto leading-relaxed">
                  Experience the future of WhatsApp bulk messaging. Secure, scalable, and visually stunning. Built by experts at CODO AI Innovations for the modern enterprise.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-10  w-full sm:w-auto">
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavClick(e, "pricing")}
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-500">
                    Get Access
                  </a>
                  <button
                    onClick={() => setIsConnectModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/30 active:scale-[0.98] transition-all duration-500 cursor-pointer">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </section>

            <section id="how-it-works" className="py-6 md:py-8 lg:pt-20 animate-in fade-in duration-700">
              <SectionHeader
                title="How It Works"
                description="From connection to delivery, we ensure your WhatsApp campaigns reach your audience effortlessly and securely."
                className="mb-0 md:mb-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 max-w-6xl mx-auto px-6 sm:px-8">
                {stepCards.map((step, idx) => (
                  <StepCard
                    key={idx}
                    stepNumber={step.stepNumber}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    color={step.color}
                    showLine={step.showLine}
                  />
                ))}
              </div>
            </section>

        <section id="features" className="w-full py-6 md:py-8">
          <SectionHeader
            title="Powerful Features"
            description="Everything you need to manage your WhatsApp API campaigns with surgical precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FeatureCard
                  key={idx}
                  icon={<Icon className="w-7 h-7" />}
                  iconColorClass={feature.iconColorClass}
                  iconBgClass={feature.iconBgClass}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>

          <section className="relative mt-16 py-12 sm:py-20 px-6 sm:px-8 rounded-[24px] sm:rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 bg-blue-600" />
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-900 opacity-90" />
            
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center text-white">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter">{stat.value}</div>
                  <div className="text-blue-100 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section id="solutions" className="w-full">
          <SectionHeader
            title="Tailored Solutions"
            description="Industry-leading WhatsApp API tools built for speed, reliability, and business growth."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <FeatureCard
                  key={idx}
                  icon={<Icon className="w-7 h-7" />}
                  iconColorClass={solution.iconColorClass}
                  iconBgClass={solution.iconBgClass}
                  title={solution.title}
                  description={solution.description}
                  variant="b"
                />
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900 text-sm sm:text-base font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-800 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-lg hover:shadow-blue-500/10 flex items-center justify-center gap-3 active:scale-95"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
  </div>
        </div>

        <Pricing />

        <Faq />
      </main>
      <Footer />

      <ScrollToTop />
      <ConnectModal isOpen={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)} planName="Free Trial" />
    </div>
  );
}
