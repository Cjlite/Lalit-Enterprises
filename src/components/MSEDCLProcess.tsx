"use client";

import { ArrowDown } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function MSEDCLProcess() {
  const steps = [
    "Application",
    "Documentation",
    "Scrutiny / Sanction",
    "Inspection",
    "Meter Testing",
    "Net Metering",
    "Commissioning",
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-solar rounded-full blur-[120px] -top-96 -right-96"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-manrope">
            Need Help Navigating the <span className="text-solar">MSEDCL Process?</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Solar and electricity projects can involve multiple applications, documentation, inspections, meter testing and coordination stages. We provide technical and process support throughout the applicable stages of your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-navy-800 border-2 border-solar/50 flex items-center justify-center mb-3 shadow-lg text-sm md:text-base font-bold text-solar">
                  {index + 1}
                </div>
                <div className="text-center font-medium text-sm text-white/90 px-2 w-24 md:w-28">
                  {step}
                </div>
                
                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-4 mb-2 text-white/30">
                    <ArrowDown size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <button
            onClick={() => openWhatsApp("Hi, I need to talk to a Project Coordinator regarding my project.")}
            className="bg-solar hover:bg-yellow-500 text-navy-900 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all mb-8"
          >
            Talk to a Project Coordinator
          </button>
          
          <div className="max-w-2xl text-xs md:text-sm text-white/50 bg-white/5 p-4 rounded-lg border border-white/10">
            * Services provided are assistance and coordination services. MSEDCL approvals, sanctions, inspections, subsidies, net-metering and timelines are subject to applicable rules, requirements and departmental processes.
          </div>
        </div>
      </div>
    </section>
  );
}
