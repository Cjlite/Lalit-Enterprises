"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { businessConfig } from "@/config/business";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultationClick = () => {
    openWhatsApp("Hello, I would like to discuss a solar/electricity project.");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt={businessConfig.companyName} 
              width={45} 
              height={45} 
              className="object-contain"
            />
            <span className="text-2xl font-bold text-navy-900 tracking-tight">
              {businessConfig.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-navy-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleConsultationClick}
              className="ml-4 bg-navy-900 hover:bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-navy-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-navy-900 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleConsultationClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-navy-900 text-white px-4 py-3 rounded-lg text-base font-medium text-center"
            >
              Get Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
