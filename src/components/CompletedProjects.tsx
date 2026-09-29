"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  PlayCircle,
  CheckCircle2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  X,
  Sparkles,
  Layers,
} from "lucide-react";
import { businessConfig } from "@/config/business";

interface ProjectItem {
  id: number;
  title: string;
  client: string;
  project: string;
  location: string;
  images: string[];
}

const clientProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Featured Project Showcase",
    client: "Waman Mandwade",
    project: "3 kWp Solar Rooftop On-Grid System",
    location: "Soygaon, Malegaon",
    images: ["/client1-1.png", "/client1-2.png", "/client1-3.png", "/client1-4.png"]
  },
  {
    id: 2,
    title: "Residential Site Execution",
    client: "Mrs. Sunita Thorat",
    project: "5 kWp Solar PV Rooftop On-Grid System",
    location: "Vihitgaon, Nashik",
    images: ["/client2-1.png", "/client2-2.png", "/client2-3.png", "/client2-4.png"]
  },
  {
    id: 3,
    title: "Rural Residential Installation",
    client: "Suresh Gavale",
    project: "3 kWp Solar System On-Grid",
    location: "Bhaur, Deola",
    images: ["/client3-1.png", "/client3-2.png", "/client3-3.png"]
  },
  {
    id: 4,
    title: "On-Grid System Installation",
    client: "Ravindra Pagar",
    project: "3 kWp Solar Rooftop On-Grid System",
    location: "Astane, Malegaon",
    images: ["/client4-1.png", "/client4-2.png", "/client4-3.png"]
  }
];

function ProjectCarouselCard({
  clientData,
  onOpenLightbox,
}: {
  clientData: ProjectItem;
  onOpenLightbox: (images: string[], initialIndex: number, title: string, client: string) => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft: sLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(sLeft > 8);
    setCanScrollRight(sLeft < scrollWidth - clientWidth - 8);

    // Calculate currently visible image index
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length > 0) {
      const containerCenter = sLeft + clientWidth / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollState();

    const handleScroll = () => {
      checkScrollState();
      setHasUserScrolled(true);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [checkScrollState]);

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setHasUserScrolled(true);
    }
  };

  const scrollPrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const itemWidth = (el.firstElementChild as HTMLElement)?.offsetWidth || 380;
    el.scrollBy({ left: -(itemWidth + 24), behavior: "smooth" });
    setHasUserScrolled(true);
  };

  const scrollNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const itemWidth = (el.firstElementChild as HTMLElement)?.offsetWidth || 380;
    el.scrollBy({ left: itemWidth + 24, behavior: "smooth" });
    setHasUserScrolled(true);
  };

  // Drag-to-scroll for desktop mouse users
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsMouseDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.4;
    el.scrollLeft = scrollLeft - walk;
    setHasUserScrolled(true);
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
      {/* Card Header with Details and Carousel Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
        <div className="border-l-4 border-solar pl-4">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-bold font-manrope text-white tracking-tight">
              {clientData.title}
            </h3>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-solar/15 text-solar border border-solar/30">
              <Sparkles size={12} /> Verified Site
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/90 text-base sm:text-lg">
            <span>
              Client: <strong className="text-white font-semibold">{clientData.client}</strong>
            </span>
            {clientData.client !== clientData.project && (
              <span className="text-white/70">
                • Project: <span className="text-white/90">{clientData.project}</span>
              </span>
            )}
          </div>
          <p className="text-white/60 text-sm flex items-center gap-1.5 mt-2">
            <MapPin size={15} className="text-solar flex-shrink-0" />
            <span>{clientData.location}</span>
          </p>
        </div>

        {/* Carousel Navigation Toolbar */}
        <div className="flex flex-wrap items-center gap-3 self-start lg:self-center">
          {/* Photo Counter & Scroll Hint */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950/80 border border-white/15 text-xs text-white/80 backdrop-blur-md shadow-inner">
            <Images size={14} className="text-solar" />
            <span className="font-semibold text-white">
              {activeIndex + 1} / {clientData.images.length}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/70 hidden sm:inline">
              {clientData.images.length} photos
            </span>
            {!hasUserScrolled && canScrollRight && (
              <span className="text-solar font-medium animate-pulse ml-1 hidden xs:inline">
                • Scroll for more →
              </span>
            )}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Previous image"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border ${
                canScrollLeft
                  ? "bg-white/10 hover:bg-solar hover:text-navy-950 hover:border-solar text-white border-white/20 active:scale-95 shadow-md cursor-pointer"
                  : "bg-white/5 text-white/30 border-white/5 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Next image"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border ${
                canScrollRight
                  ? "bg-solar text-navy-950 border-solar hover:bg-solar/90 active:scale-95 shadow-lg shadow-solar/20 cursor-pointer animate-pulse-subtle"
                  : "bg-white/5 text-white/30 border-white/5 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="relative group/carousel">
        {/* Left Floating Overlay Arrow (Desktop) */}
        {canScrollLeft && (
          <button
            onClick={scrollPrev}
            aria-label="Scroll left"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-950/80 hover:bg-solar hover:text-navy-950 text-white border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Right Floating Overlay Arrow (Desktop) */}
        {canScrollRight && (
          <button
            onClick={scrollNext}
            aria-label="Scroll right"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-solar text-navy-950 hover:bg-white hover:text-navy-950 border border-solar/40 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 opacity-95 hover:opacity-100 hover:scale-105 active:scale-95 animate-bounce-subtle"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Right Edge Fade Hint to signal more content */}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900/90 to-transparent z-10 rounded-r-2xl hidden sm:flex items-center justify-end pr-2">
            <div className="bg-navy-950/80 backdrop-blur-md text-solar text-xs px-2 py-1 rounded-full border border-solar/30 shadow-lg flex items-center gap-1 font-semibold">
              <span>More</span>
              <ChevronRight size={14} />
            </div>
          </div>
        )}

        {/* Image Slider List */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-1 snap-x snap-mandatory scroll-smooth hide-scrollbar select-none ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {clientData.images.map((src, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(clientData.images, idx, clientData.title, clientData.client)}
              className="flex-none w-[78vw] xs:w-[320px] sm:w-[380px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[380px] relative rounded-2xl overflow-hidden snap-start shadow-xl ring-1 ring-white/10 group/img cursor-pointer bg-navy-950 transition-all duration-300 hover:ring-solar/60 hover:shadow-solar/10"
            >
              <Image
                src={src}
                alt={`${clientData.project} - Photo ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 380px, 420px"
                className="object-cover transition-transform duration-700 group-hover/img:scale-105"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40 opacity-70 group-hover/img:opacity-50 transition-opacity"></div>

              {/* Top Photo Index Badge */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/70 border border-white/20 backdrop-blur-md text-xs font-semibold text-white/90 shadow-md">
                <Layers size={13} className="text-solar" />
                <span>
                  Photo {idx + 1} of {clientData.images.length}
                </span>
              </div>

              {/* Hover Fullscreen Prompt */}
              <div className="absolute top-3.5 right-3.5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                <div className="w-8 h-8 rounded-full bg-navy-950/80 border border-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-solar hover:text-navy-950 transition-colors">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                <span className="text-xs font-medium text-white/80 bg-navy-950/60 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 truncate">
                  {clientData.client} • Site View
                </span>
                <span className="text-[11px] text-solar font-semibold opacity-0 group-hover/img:opacity-100 transition-opacity">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Dot Indicators & Visual Scroll Progress */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
        <div className="flex items-center gap-2">
          {clientData.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Jump to photo ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-solar shadow-md shadow-solar/40"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
          <span className="text-xs text-white/50 ml-2 font-medium">
            Photo {activeIndex + 1} of {clientData.images.length}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="hidden xs:inline">Swipe or use arrows to view all pictures</span>
          <span className="xs:hidden">Swipe to see more photos</span>
          <span className="text-solar font-bold">→</span>
        </div>
      </div>
    </div>
  );
}

export default function CompletedProjects() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title: string;
    client: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
    client: "",
  });

  const openLightbox = (
    images: string[],
    initialIndex: number,
    title: string,
    client: string
  ) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: initialIndex,
      title,
      client,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const lightboxNext = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const lightboxPrev = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxState.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState.isOpen]);

  const showcaseImages = [
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
    <section id="projects" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute w-[800px] h-[800px] bg-solar rounded-full blur-[100px] top-1/4 -right-64"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-solar/10 border border-solar/20 text-solar text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles size={14} /> Proven Track Record
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-manrope mb-4 text-white">
              Completed Solar Projects
            </h2>
            <p className="text-lg text-white/80">
              Explore our real-world rooftop installations, technical switchgear setups, and high-efficiency solar infrastructure across {businessConfig.serviceArea}.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm self-start md:self-end">
            <CheckCircle2 size={18} className="text-solar" />
            <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              100% Quality Execution
            </span>
          </div>
        </div>

        {/* Featured Video & Top Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Featured Video */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] bg-navy-950 group shadow-xl ring-1 ring-white/10">
            <video
              src="https://player.vimeo.com/external/498801991.sd.mp4?s=1f1ec7e14fb61e389e17b87ed57e2a9b40097cf9&profile_id=164&oauth2_token_id=57447761"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex items-start gap-4">
              <PlayCircle size={36} className="text-solar mt-1 flex-shrink-0 animate-pulse" />
              <div>
                <span className="text-2xl font-bold font-manrope block mb-1 text-white">
                  Large Scale Site Execution
                </span>
                <span className="text-sm font-medium text-white/70">
                  Industrial & residential solar array installation timeline & overview.
                </span>
              </div>
            </div>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:h-[400px]">
            {showcaseImages.slice(0, 2).map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(showcaseImages.map(i => i.src), index, img.title, "Lalit Enterprises Showcase")}
                className="relative rounded-3xl overflow-hidden h-[250px] sm:h-full group shadow-xl ring-1 ring-white/10 cursor-pointer bg-navy-950"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-navy-950/80 border border-white/20 text-white flex items-center justify-center">
                    <Maximize2 size={14} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-base font-bold leading-tight line-clamp-2 text-white">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Image Banner */}
        <div
          onClick={() => openLightbox(showcaseImages.map(i => i.src), 2, showcaseImages[2].title, "Lalit Enterprises Showcase")}
          className="relative rounded-3xl overflow-hidden h-[250px] lg:h-[350px] group shadow-xl ring-1 ring-white/10 cursor-pointer bg-navy-950 mb-20"
        >
          <Image
            src={showcaseImages[2].src}
            alt={showcaseImages[2].title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"></div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-navy-950/80 border border-white/20 text-white flex items-center justify-center">
              <Maximize2 size={16} />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex flex-col justify-end">
            <span className="text-xs uppercase tracking-widest text-solar font-bold mb-2">
              Commercial Rooftop Project
            </span>
            <span className="text-2xl sm:text-3xl font-bold font-manrope text-white">
              {showcaseImages[2].title}
            </span>
          </div>
        </div>

        {/* Client Projects Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-3">
            <Images size={14} className="text-solar" /> Interactive Client Galleries
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-manrope text-white mb-3">
            Real Site Installation Galleries
          </h3>
          <p className="text-white/70 text-base">
            Browse through multiple high-resolution photos for each verified client installation. Use the navigation arrows, dot indicators, or drag to explore all angles.
          </p>
        </div>

        {/* Featured Client Projects with Enhanced Carousel */}
        <div className="space-y-12">
          {clientProjects.map((clientData) => (
            <ProjectCarouselCard
              key={clientData.id}
              clientData={clientData}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxState.isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 transition-all duration-300 animate-in fade-in"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between z-20">
            <div className="text-left">
              <h4 className="text-lg sm:text-xl font-bold font-manrope text-white">
                {lightboxState.title}
              </h4>
              <p className="text-xs sm:text-sm text-solar font-medium">
                Client: {lightboxState.client}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
                {lightboxState.currentIndex + 1} / {lightboxState.images.length}
              </span>
              <button
                onClick={closeLightbox}
                aria-label="Close modal"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Modal Main Image Area */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={lightboxPrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-navy-950/80 hover:bg-solar hover:text-navy-950 text-white border border-white/20 flex items-center justify-center transition-all shadow-2xl cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Current Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={lightboxState.images[lightboxState.currentIndex]}
                alt={`${lightboxState.title} - Fullscreen View`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={lightboxNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-navy-950/80 hover:bg-solar hover:text-navy-950 text-white border border-white/20 flex items-center justify-center transition-all shadow-2xl cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Modal Footer Thumbnails */}
          <div className="flex justify-center items-center gap-2 overflow-x-auto py-2 z-20">
            {lightboxState.images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxState((prev) => ({ ...prev, currentIndex: idx }))}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 cursor-pointer ${
                  lightboxState.currentIndex === idx
                    ? "border-solar scale-105 shadow-lg shadow-solar/30 ring-2 ring-solar/50"
                    : "border-white/20 opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="thumbnail" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
