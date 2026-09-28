import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Technical Understanding",
      description: "Consideration of technical and electrical requirements throughout the project.",
    },
    {
      title: "Documentation Support",
      description: "Assistance with applicable applications, forms and technical documentation.",
    },
    {
      title: "MSEDCL Coordination",
      description: "Coordination across applicable application, inspection, testing and metering stages.",
    },
    {
      title: "End-to-End Project Support",
      description: "Support from initial consultation through applicable commissioning stages.",
    },
    {
      title: "Residential to Industrial",
      description: "Services structured for homeowners, businesses and industrial requirements.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-manrope">
            One Point of <span className="text-energy">Coordination</span> for Your Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-solar/50 hover:shadow-md transition-all ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-energy flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
