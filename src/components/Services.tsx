"use client";

import { Sun, FileText, Building2, Zap, Gauge, Tractor } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const servicesData = [
    {
      icon: <Sun size={28} />,
      title: "Rooftop Solar",
      description: "Residential and commercial rooftop solar project assistance including consultation, site assessment, documentation, coordination and technical execution support.",
      ctaText: "Discuss Rooftop Solar",
      whatsappMessage: "Hi, I am interested in Rooftop Solar. I would like to discuss my project."
    },
    {
      icon: <FileText size={28} />,
      title: "PM Surya Ghar Yojana",
      description: "Application, documentation and subsidy-process assistance for eligible residential rooftop solar projects.",
      ctaText: "Get Application Assistance",
      whatsappMessage: "Hi, I need assistance with PM Surya Ghar Yojana application and subsidy process."
    },
    {
      icon: <Building2 size={28} />,
      title: "MSEDCL Process Coordination",
      description: "Support for applicable applications, inspections, meter testing, net-metering and related coordination stages.",
      ctaText: "Discuss MSEDCL Requirement",
      whatsappMessage: "Hi, I need assistance with an MSEDCL-related application/process."
    },
    {
      icon: <Zap size={28} />,
      title: "New Electricity Connection",
      description: "Support for residential, commercial and industrial new electricity connection processes and applicable documentation.",
      ctaText: "Discuss New Connection",
      whatsappMessage: "Hi, I need assistance with a new electricity connection."
    },
    {
      icon: <Gauge size={28} />,
      title: "Load & Meter Services",
      description: "Support for sanctioned-load extension or reduction, meter shifting, meter-related applications and site coordination.",
      ctaText: "Discuss Load / Meter Work",
      whatsappMessage: "Hi, I need assistance with electricity load extension/reduction."
    },
    {
      icon: <Tractor size={28} />,
      title: "Solar Agriculture Pump",
      description: "Application and project assistance for solar agricultural pumping systems.",
      ctaText: "Discuss Solar Pump",
      whatsappMessage: "Hi, I need assistance with a solar agricultural pump project."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-manrope">
            Complete <span className="text-energy">Solar & Electrical</span> Project Support
          </h2>
          <p className="text-lg text-gray-600">
            From applications and documentation to technical coordination and commissioning, we support the key stages of your solar and electricity project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              whatsappMessage={service.whatsappMessage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
