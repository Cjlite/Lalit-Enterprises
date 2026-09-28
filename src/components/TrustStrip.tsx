export default function TrustStrip() {
  const services = [
    "Residential Solar",
    "Commercial Projects",
    "Industrial Support",
    "MSEDCL Coordination",
    "Electrical Services",
  ];

  return (
    <div className="w-full bg-navy-900 py-6 border-y border-navy-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop view */}
        <div className="hidden md:flex justify-between items-center text-white/90 font-medium text-sm lg:text-base">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <span>{service}</span>
              {index < services.length - 1 && (
                <span className="text-solar opacity-50">•</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex overflow-x-auto gap-6 pb-2 snap-x hide-scrollbar text-white/90 text-sm font-medium whitespace-nowrap">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-6 snap-center">
              <span>{service}</span>
              {index < services.length - 1 && (
                <span className="text-solar opacity-50">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
