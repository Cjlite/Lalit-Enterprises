"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function ServiceMatrix() {
  const [activeTab, setActiveTab] = useState("all");
  
  const matrixData = [
    { req: "Rooftop Solar", support: true, category: "solar" },
    { req: "PM Surya Ghar Application", support: true, category: "solar" },
    { req: "Subsidy Process Assistance", support: true, category: "solar" },
    { req: "MSEDCL Application Coordination", support: true, category: "coordination" },
    { req: "Inspection Coordination", support: true, category: "coordination" },
    { req: "Meter Testing Coordination", support: true, category: "coordination" },
    { req: "Net Metering Coordination", support: true, category: "coordination" },
    { req: "New Residential Connection", support: true, category: "electrical" },
    { req: "New Commercial Connection", support: true, category: "electrical" },
    { req: "New Industrial Connection", support: true, category: "electrical" },
    { req: "Load Extension", support: true, category: "electrical" },
    { req: "Load Reduction", support: true, category: "electrical" },
    { req: "Meter Shifting", support: true, category: "electrical" },
    { req: "Solar Agriculture Pump", support: true, category: "solar" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-navy-900 font-manrope">
            What Can We Help You With?
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-navy-900 text-white">
              <tr>
                <th className="py-5 px-8 font-semibold w-3/4">Requirement</th>
                <th className="py-5 px-8 font-semibold w-1/4 text-center">Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {matrixData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-8 text-gray-800 font-medium">{item.req}</td>
                  <td className="py-4 px-8 text-center flex justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                      <Check size={16} /> Available
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion/Cards */}
        <div className="md:hidden space-y-3">
          {matrixData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <span className="text-gray-800 font-medium pr-4">{item.req}</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold whitespace-nowrap flex-shrink-0">
                <Check size={14} /> Available
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
