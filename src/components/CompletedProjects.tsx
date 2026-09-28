"use client";

import Image from "next/image";
import { PlayCircle, CheckCircle2 } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function CompletedProjects() {
  const images = [
    {
      src: "/project1.png",
      title: "Rooftop Installation"
    },
    {
      src: "/project2.png",
      title: "Inverter & Electrical Setup"
    },
    {
      src: "/project3.png",
      title: "Rooftop Exterior Structure"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-navy-900 text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute w-[800px] h-[800px] bg-solar rounded-full blur-[100px] top-1/4 -right-64"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold font-manrope mb-4 text-white">
              Completed Solar Projects
            </h2>
            <p className="text-lg text-white/80">
              Take a look at some of our successfully executed projects and technical operations across our {businessConfig.serviceArea} service area.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm self-start md:self-end">
            <CheckCircle2 size={18} className="text-solar" />
            <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Proven Execution
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Featured Video */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px] bg-navy-950 group shadow-xl ring-1 ring-white/10">
            <video
              src="https://player.vimeo.com/external/498801991.sd.mp4?s=1f1ec7e14fb61e389e17b87ed57e2a9b40097cf9&profile_id=164&oauth2_token_id=57447761"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex items-start gap-4">
              <PlayCircle size={36} className="text-solar mt-1 flex-shrink-0 animate-pulse" />
              <div>
                <span className="text-2xl font-bold font-manrope block mb-1">Large Scale Site Execution</span>
                <span className="text-sm font-medium text-white/70">Industrial solar array installation timeline & overview.</span>
              </div>
            </div>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:h-[400px]">
            {images.slice(0, 2).map((img, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden h-[250px] sm:h-full group shadow-xl ring-1 ring-white/10">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-base font-bold leading-tight line-clamp-2">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Image row */}
        <div className="relative rounded-2xl overflow-hidden h-[250px] lg:h-[350px] group shadow-xl ring-1 ring-white/10">
          <Image
            src={images[2].src}
            alt={images[2].title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 flex flex-col justify-end">
            <span className="text-xs uppercase tracking-widest text-solar font-bold mb-2">Commercial Rooftop</span>
            <span className="text-3xl font-bold font-manrope">{images[2].title}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
