"use client";

import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/config/business";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t-4 border-solar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded-xl">
                <Image 
                  src="/logo.png" 
                  alt={businessConfig.companyName} 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                {businessConfig.companyName}
              </span>
            </Link>
            <div className="text-solar text-sm font-bold mb-6 uppercase tracking-wider">
              Solar Liaison & Project Services
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Technical, documentation and coordination support for solar and electricity projects.
            </p>
            <button
              onClick={() => openWhatsApp("Hello, I would like to discuss a solar/electricity project.")}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Services</h3>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#services" className="hover:text-solar transition-colors">Rooftop Solar</Link></li>
              <li><Link href="#services" className="hover:text-solar transition-colors">PM Surya Ghar</Link></li>
              <li><Link href="#services" className="hover:text-solar transition-colors">MSEDCL Coordination</Link></li>
              <li><Link href="#services" className="hover:text-solar transition-colors">New Electricity Connection</Link></li>
              <li><Link href="#services" className="hover:text-solar transition-colors">Load Extension / Reduction</Link></li>
              <li><Link href="#services" className="hover:text-solar transition-colors">Meter Shifting</Link></li>
              <li><Link href="#services" className="hover:text-solar transition-colors">Solar Agriculture Pump</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Company</h3>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#about" className="hover:text-solar transition-colors">About</Link></li>
              <li><Link href="#how-we-work" className="hover:text-solar transition-colors">How We Work</Link></li>
              <li><Link href="#faq" className="hover:text-solar transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-solar transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Contact</h3>
            <ul className="space-y-5 text-white/70">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-white">{businessConfig.ownerName}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-solar flex-shrink-0 mt-0.5" />
                <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className="hover:text-solar transition-colors">
                  {businessConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-solar flex-shrink-0 mt-0.5" />
                <a href={`mailto:${businessConfig.email}`} className="hover:text-solar transition-colors break-all">
                  {businessConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-solar flex-shrink-0 mt-0.5" />
                <span>
                  {businessConfig.city}, {businessConfig.state}<br/>
                  <span className="text-sm opacity-80 mt-1 block">Serving: {businessConfig.serviceArea}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>
            © 2026 {businessConfig.companyName}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
