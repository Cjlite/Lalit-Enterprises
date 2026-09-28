"use client";

import { useState } from "react";
import { openWhatsApp } from "@/utils/whatsapp";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    projectType: "Residential",
    serviceRequired: "Rooftop Solar",
    load: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello,

I would like to discuss a solar/electricity project.

Name: ${formData.name}
Mobile: ${formData.mobile}
Project Type: ${formData.projectType}
Service Required: ${formData.serviceRequired}
Project Location: ${formData.location}
Approximate Load: ${formData.load || 'Not specified'}

Requirement:
${formData.message || 'Please guide me regarding the next steps.'}

Please guide me regarding the next steps.`;

    openWhatsApp(message);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900 text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-800 rounded-l-full opacity-50 pointer-events-none transform translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-manrope">
              Let's Discuss <span className="text-solar">Your Project</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Tell us what you need and we'll help you understand the applicable next steps. Fill out the form and we will connect with you directly on WhatsApp.
            </p>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hidden lg:block">
              <h3 className="text-xl font-bold mb-4 text-solar">Why talk to us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-solar"></div>
                  <span className="text-white/80">Clear technical guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-solar"></div>
                  <span className="text-white/80">Process documentation support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-solar"></div>
                  <span className="text-white/80">End-to-end MSEDCL coordination</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none"
                    placeholder="Your mobile number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Location *</label>
                  <input
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none"
                    placeholder="City, Area"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Type *</label>
                  <select
                    required
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none bg-white"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Required *</label>
                  <select
                    required
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none bg-white"
                  >
                    <option value="Rooftop Solar">Rooftop Solar</option>
                    <option value="PM Surya Ghar">PM Surya Ghar</option>
                    <option value="MSEDCL Coordination">MSEDCL Coordination</option>
                    <option value="New Electricity Connection">New Electricity Connection</option>
                    <option value="Load Extension">Load Extension</option>
                    <option value="Load Reduction">Load Reduction</option>
                    <option value="Meter Shifting">Meter Shifting</option>
                    <option value="Meter Testing">Meter Testing</option>
                    <option value="Net Metering">Net Metering</option>
                    <option value="Solar Agriculture Pump">Solar Agriculture Pump</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Approximate Electricity Load / Sanctioned Load</label>
                <input
                  type="text"
                  name="load"
                  value={formData.load}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none"
                  placeholder="e.g. 5kW, 50kW, 100kVA (Optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message / Requirement</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 transition-all outline-none resize-none"
                  placeholder="Briefly describe your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Send size={20} />
                Continue on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
