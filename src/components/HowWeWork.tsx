export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      description: "Understand your electricity, solar and project requirements.",
    },
    {
      num: "02",
      title: "Site Assessment",
      description: "Review load, roof, electrical and installation requirements.",
    },
    {
      num: "03",
      title: "Documentation",
      description: "Prepare applicable applications and technical documents.",
    },
    {
      num: "04",
      title: "MSEDCL Coordination",
      description: "Coordinate applicable sanction, inspection and testing stages.",
    },
    {
      num: "05",
      title: "Technical Execution",
      description: "Installation and electrical work as per the agreed project scope.",
    },
    {
      num: "06",
      title: "Meter & Commissioning",
      description: "Support through net-metering, release and commissioning stages.",
    }
  ];

  return (
    <section id="how-we-work" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-manrope">
            From <span className="text-energy">Consultation</span> to <span className="text-energy">Commissioning</span>
          </h2>
          <p className="text-lg text-gray-600">
            A structured approach to keep your project clear, coordinated and moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 text-5xl font-extrabold text-gray-200 group-hover:text-solar transition-colors font-manrope">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
