"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceCard from "../components/service-card";
import ConsultCta from "../components/consult-cta";
import Faq from "../components/faq";
import { serviceCategories } from "../data";
import ScrollToTop from "../components/scroll-top";
import PageHeader from "../components/page-header";

export default function ServicesPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-blue-600/30 selection:text-blue-200 transition-all duration-300"
    >
      <Navbar />

      <main className="flex-1 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-20 sm:pb-40 space-y-24 sm:space-y-32">
            <PageHeader
              badge="Our Expertise"
              title={
                <>
                  Services at <br />
                  <span className="text-blue-600 px-2">CODO AI Innovations</span>
                </>
              }
              description="We combine deep technical engineering with creative excellence to help businesses scale in the digital age. From enterprise-grade software to viral marketing strategies."
            />

            <div className="space-y-32 mt-16">
              {serviceCategories.map((category) => {
                const containerClass =
                  category.id === "enterprise"
                    ? "flex flex-wrap justify-center gap-6 sm:gap-8 max-w-7xl mx-auto"
                    : category.id === "creative"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto justify-items-center"
                      : "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto justify-items-center";

                return (
                  <section key={category.id} id={category.id} className="space-y-6 md:space-y-8 px-4 sm:px-0">
                    <div className="max-w-3xl space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-blue-600 rounded-full" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                          {category.title}
                        </h2>
                      </div>
                      <p className="text-lg text-gray-500 dark:text-zinc-400 leading-relaxed pl-16">
                        {category.description}
                      </p>
                    </div>

                    <div className={containerClass}>
                      {category.items.map((item, itemIdx) => (
                        <ServiceCard
                          key={itemIdx}
                          title={item.title}
                          description={item.description}
                          icon={item.icon}
                          iconBgClass={item.iconBgClass}
                          iconColorClass={item.iconColorClass}
                          widthClass={item.widthClass}
                        />
                      ))}
                    </div>

                    <ConsultCta href="/contact" />
                  </section>
                );
              })}

              <section>
                <div className="bg-zinc-900 dark:bg-zinc-900 rounded-3xl sm:rounded-[48px] p-8 sm:p-16 md:p-24 relative overflow-hidden mx-4 sm:mx-0 border border-white/5">
                  <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                      Ready to Scale Your Business?
                    </h2>
                    <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                      Whether you need a custom ERP system or a viral marketing campaign, our team is ready to turn your vision into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
                      <a
                        href="mailto:info@codoai.in"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl shadow-blue-500/20 active:scale-[0.98] text-center"
                      >
                        Book a Consultation
                      </a>
                      <a
                        href="https://codoai.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-2xl font-bold text-lg transition-all duration-500 active:scale-[0.98] text-center"
                      >
                        View Our Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Faq />

        </div>
      </main>
      <Footer />

      <ScrollToTop />
    </div>
  );
}
