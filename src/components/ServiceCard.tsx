import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  ctaText,
  whatsappMessage,
}: ServiceCardProps) {
  const handleClick = () => {
    openWhatsApp(whatsappMessage);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      
      <button
        onClick={handleClick}
        className="flex items-center gap-2 text-navy-700 font-semibold hover:text-solar transition-colors mt-auto w-fit"
      >
        {ctaText}
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
