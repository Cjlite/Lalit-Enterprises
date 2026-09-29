"use client";

import Image from "next/image";

export default function ProjectTypes() {
  const projects = [
    {
      title: "Residential Rooftop Solar",
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Commercial Rooftop Solar",
      image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Industrial Electrical Infrastructure",
      image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=1411&auto=format&fit=crop"
    },
    {
      title: "Solar Agriculture Pump",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-2xl font-bold text-white font-manrope">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
