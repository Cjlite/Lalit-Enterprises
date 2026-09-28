"use client";

import { businessConfig } from "@/config/business";
import { openWhatsApp } from "@/utils/whatsapp";
import { MapPin, Briefcase, Zap } from "lucide-react";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="relative h-[400px] lg:h-auto bg-navy-800 flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="w-48 h-48 rounded-full border-4 border-solar overflow-hidden mb-6 shadow-xl relative bg-white">
                <Image src="/owner.png" alt={businessConfig.ownerName} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{businessConfig.ownerName}</h3>
              <p className="text-solar font-medium text-center">{businessConfig.designation}</p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-white mb-6 font-manrope">
                About {businessConfig.ownerName}
              </h2>
              
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {businessConfig.ownerName} provides solar liaison, technical coordination and electricity-project support for residential, commercial and industrial customers.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-solar">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Based In</h4>
                    <p className="text-white/70 text-sm">{businessConfig.city}, {businessConfig.state}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-solar">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Specialization</h4>
                    <p className="text-white/70 text-sm">Solar Liaison & Project Services</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-solar">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Focus Areas</h4>
                    <p className="text-white/70 text-sm">Solar Projects • MSEDCL Coordination • Electricity Connections • Technical Documentation</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp("Hello, I would like to speak regarding a project requirement.")}
                className="bg-white hover:bg-gray-100 text-navy-900 px-6 py-4 rounded-xl font-bold w-full md:w-auto text-center transition-colors shadow-lg"
              >
                Speak Directly on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
