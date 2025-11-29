import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { IconCheck, IconCertificate, IconClipboardCheck, IconCurrencyDollar } from "@tabler/icons-react";

export default function Services() {
  const services = [
    {
      title: "Gasoline Production",
      description: "High-octane gasoline meeting international quality standards for automotive use.",
      features: ["Premium grade", "Regular grade", "Quality certified", "ISO standards"],
      icon: "⛽",
    },
    {
      title: "Diesel Fuel",
      description: "Clean-burning diesel fuel for transportation and industrial applications.",
      features: ["Ultra-low sulfur", "High cetane rating", "Winter grade available", "Bulk supply"],
      icon: "🚛",
    },
    {
      title: "Aviation Fuels",
      description: "Jet fuel and aviation gasoline meeting strict aviation industry specifications.",
      features: ["Jet A-1", "Avgas", "Defense grade", "International standards"],
      icon: "✈️",
    },
    {
      title: "LPG & NGL",
      description: "Liquefied petroleum gas and natural gas liquids for various applications.",
      features: ["Propane", "Butane", "Mixed gases", "Bulk storage"],
      icon: "🔥",
    },
    {
      title: "Specialty Chemicals",
      description: "High-purity specialty chemicals for industrial and commercial use.",
      features: ["Solvents", "Base chemicals", "Custom formulations", "Technical support"],
      icon: "🧪",
    },
    {
      title: "Bunker Fuels",
      description: "Marine fuels meeting international maritime fuel specifications.",
      features: ["IFO grades", "MGO", "LSFO", "Marine certified"],
      icon: "🚢",
    },
  ];

  const additionalServices = [
    {
      title: "Custom Blending",
      description: "Tailored fuel blending services to meet specific customer requirements.",
    },
    {
      title: "Quality Testing",
      description: "Comprehensive laboratory testing and quality assurance services.",
    },
    {
      title: "Technical Support",
      description: "Expert technical consultation and support for our products and services.",
    },
    {
      title: "Supply Chain Management",
      description: "Efficient logistics and supply chain solutions for reliable product delivery.",
    },
  ];

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Refining Solutions"
        description="A full range of high-quality petroleum products and services to meet diverse market needs."
      />

      <Section
        title="Our Product Portfolio"
        description="Quality products for every application"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/investor-contacts" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Additional Services"
        description="Supporting services to enhance your experience"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} hover>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Quality Assurance"
        description="Uncompromising standards in every product"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <IconCertificate className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">ISO Certified</h3>
              <p className="text-gray-600 text-sm">International quality standards</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <IconClipboardCheck className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Continuous Testing</h3>
              <p className="text-gray-600 text-sm">Rigorous quality control</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <IconCurrencyDollar className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Certified Products</h3>
              <p className="text-gray-600 text-sm">Industry-recognized certifications</p>
            </div>
          </div>
          <Card className="bg-primary-50 border-2 border-primary-200">
            <p className="text-center text-gray-700 leading-relaxed">
              Every product undergoes extensive testing and quality assurance processes before delivery. 
              Our state-of-the-art laboratory facilities ensure that all products meet or exceed 
              international standards and customer specifications.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title="Get in Touch"
        description="Let's discuss how we can meet your needs"
        className="bg-primary-500 text-white"
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-primary-100 mb-8">
            Contact our sales team to learn more about our products and services, 
            request a quote, or discuss your specific requirements.
          </p>
          <Button href="/investor-contacts" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}

