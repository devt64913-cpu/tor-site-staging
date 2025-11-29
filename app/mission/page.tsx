import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { IconShieldCheck, IconWorld, IconBolt, IconBulb, IconUsers, IconBuildingCommunity } from "@tabler/icons-react";

export default function Mission() {
  const coreValues = [
    {
      title: "Safety Excellence",
      description: "We prioritize the safety and well-being of our employees, contractors, and communities above all else.",
      icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Environmental Stewardship",
      description: "We are committed to protecting the environment and reducing our ecological footprint through sustainable practices.",
      icon: <IconWorld className="w-8 h-8" />,
    },
    {
      title: "Operational Excellence",
      description: "We strive for continuous improvement in all our operations, delivering quality products and services.",
      icon: <IconBolt className="w-8 h-8" />,
    },
    {
      title: "Innovation & Technology",
      description: "We embrace innovation and leverage advanced technology to stay ahead in the industry.",
      icon: <IconBulb className="w-8 h-8" />,
    },
    {
      title: "Integrity & Ethics",
      description: "We conduct business with the highest ethical standards, transparency, and accountability.",
      icon: <IconUsers className="w-8 h-8" />,
    },
    {
      title: "Community Engagement",
      description: "We are committed to being a responsible corporate citizen and contributing to community development.",
      icon: <IconBuildingCommunity className="w-8 h-8" />,
    },
  ];

  return (
    <>
      <Hero
        title="Our Mission & Core Values"
        subtitle="What Drives Us"
        description="Guided by our mission and core values, we strive to be a leader in the oil refining industry."
      />

      <Section
        title="Our Mission"
        description="The foundation of everything we do"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                To be the world's most trusted and innovative oil refining company, 
                delivering exceptional value to our customers, stakeholders, and communities 
                while maintaining the highest standards of safety, environmental stewardship, 
                and operational excellence.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission drives every decision we make and every action we take. 
                We are committed to transforming the energy sector through innovation, 
                sustainability, and unwavering dedication to excellence.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section
        title="Our Vision"
        description="Where we're heading"
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              To lead the global energy transition by setting new standards in sustainable refining, 
              pioneering innovative technologies, and creating lasting value for all stakeholders 
              while protecting our planet for future generations.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our Core Values">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} hover>
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Our Commitment"
        description="Promises we make and keep"
        className="bg-primary-500 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">Safety Commitment</h3>
              <p className="text-primary-100">Zero tolerance for safety incidents</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">50%</div>
              <h3 className="text-xl font-semibold mb-2">Carbon Reduction</h3>
              <p className="text-primary-100">By 2030, compared to 2020 baseline</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
              <p className="text-primary-100">Continuous monitoring and improvement</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-primary-100">Open communication with stakeholders</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

