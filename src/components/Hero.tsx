"use client";

import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Hero() {
  const handleConsultationClick = () => {
    openWhatsApp("Hello, I would like to discuss a solar/electricity project.");
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar/10 text-navy-800 text-sm font-bold mb-6 uppercase tracking-wider">
              <Zap size={16} className="text-solar" />
              Solar Liaison & Project Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-tight mb-6 font-manrope">
              Solar Projects. MSEDCL Processes. <span className="text-energy">Technical Coordination.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Complete project support for <span className="font-semibold text-navy-900">residential, commercial and industrial</span> solar and electricity requirements — from consultation and site assessment to documentation, <span className="font-semibold text-energy">MSEDCL coordination</span>, metering and commissioning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleConsultationClick}
                className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                Get Project Consultation
                <ArrowRight size={20} />
              </button>
              <a
                href="#services"
                className="bg-white border-2 border-gray-200 hover:border-navy-900 text-navy-900 px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center transition-all"
              >
                Explore Our Services
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="w-2 h-2 rounded-full bg-energy"></span>
              Residential • Commercial • Industrial • MSEDCL Coordination
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/project3.png"
                alt="Solar Panels on Rooftop"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-xs animate-fade-in-up">
              <div className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-solar/20 flex items-center justify-center">
                  <Zap size={16} className="text-solar" />
                </div>
                Complete Project Support
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Consultation → Documentation → Coordination → Commissioning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
