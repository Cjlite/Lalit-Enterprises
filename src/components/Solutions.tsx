"use client";

import { Home, Building, Factory } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Solutions() {
  const solutions = [
    {
      icon: <Home size={32} />,
      title: "Residential Solar & Electricity Services",
      type: "Residential",
      features: [
        "Rooftop Solar",
        "PM Surya Ghar assistance",
        "Subsidy documentation assistance",
        "Net-metering coordination",
        "New electricity connection",
        "Meter-related support"
      ],
      ctaText: "Residential Enquiry",
      whatsappMessage: "Hi, I have a residential requirement. I would like to discuss my project."
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Project Support",
      type: "Commercial",
      features: [
        "Commercial rooftop solar",
        "Electricity connection support",
        "Load extension/reduction",
        "Meter shifting",
        "MSEDCL coordination",
        "Documentation support"
      ],
      ctaText: "Commercial Enquiry",
      whatsappMessage: "Hi, I have a commercial requirement. I would like to discuss my project."
    },
    {
      icon: <Factory size={32} />,
      title: "Industrial Technical Liaison",
      type: "Industrial",
      features: [
        "Industrial electricity connection",
        "Load-related applications",
        "Meter shifting",
        "Technical coordination",
        "MSEDCL liaison support",
        "Project documentation"
      ],
      ctaText: "Industrial Enquiry",
      whatsappMessage: "Hi, I have an industrial requirement. I would like to discuss my project."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-manrope">
            Solutions for <span className="text-energy">Every Project Type</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="bg-navy-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="mb-4 text-solar">{solution.icon}</div>
                <div className="text-sm font-semibold tracking-wider text-white/80 uppercase mb-2">
                  {solution.type}
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {solution.title}
                </h3>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-energy mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => openWhatsApp(solution.whatsappMessage)}
                  className="w-full py-3.5 rounded-xl border-2 border-navy-900 text-navy-900 font-bold hover:bg-navy-900 hover:text-white transition-colors mt-auto"
                >
                  {solution.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
