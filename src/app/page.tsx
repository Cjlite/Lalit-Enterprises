"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import MSEDCLProcess from "@/components/MSEDCLProcess";
import HowWeWork from "@/components/HowWeWork";
import CompletedProjects from "@/components/CompletedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceMatrix from "@/components/ServiceMatrix";
import AboutFounder from "@/components/AboutFounder";
import ProjectTypes from "@/components/ProjectTypes";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-solar/30 selection:text-navy-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Solutions />
      <MSEDCLProcess />
      <HowWeWork />
      <CompletedProjects />
      <WhyChooseUs />
      <ServiceMatrix />
      <AboutFounder />
      <ProjectTypes />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
