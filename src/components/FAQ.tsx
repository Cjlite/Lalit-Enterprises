"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you provide rooftop solar project support?",
      a: "Yes, we provide complete technical, documentation and coordination assistance for residential and commercial rooftop solar projects."
    },
    {
      q: "Do you assist with PM Surya Ghar Yojana applications?",
      a: "Yes, we provide assistance with PM Surya Ghar Yojana applications and the related subsidy documentation processes."
    },
    {
      q: "Do you help with subsidy documentation?",
      a: "Yes, we assist eligible customers with preparing and coordinating required documentation for applicable solar subsidies."
    },
    {
      q: "Do you provide MSEDCL process coordination?",
      a: "Yes, we provide support across applicable MSEDCL processes including applications, inspections, and meter testing."
    },
    {
      q: "Do you assist with net-metering?",
      a: "Yes, we provide coordination support for the net-metering process for solar installations."
    },
    {
      q: "Do you help with new electricity connections?",
      a: "Yes, we assist with documentation and coordination for new residential, commercial and industrial electricity connections."
    },
    {
      q: "Do you assist with load extension or reduction?",
      a: "Yes, we provide support for load-related applications, documentation and site coordination."
    },
    {
      q: "Do you provide meter shifting support?",
      a: "Yes, we assist with the application and technical process required for meter shifting."
    },
    {
      q: "Do you assist with solar agricultural pump projects?",
      a: "Yes, we offer application and project assistance for solar agricultural pumping systems."
    },
    {
      q: "Do you provide installation and electrical work?",
      a: "We provide technical coordination and can assist with the required technical execution and electrical work as per project scope."
    },
    {
      q: "Which areas do you serve?",
      a: `We currently serve ${businessConfig.serviceArea} and surrounding regions.`
    },
    {
      q: "How can I get a project consultation?",
      a: `You can contact us directly via WhatsApp at ${businessConfig.whatsapp} or fill out the project inquiry form below.`
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-manrope">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-solar focus-visible:ring-inset"
              >
                <span className="font-bold text-gray-900 pr-8">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-navy-900" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
