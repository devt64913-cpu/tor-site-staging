import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function History() {
  const milestones = [
    {
      year: "1970",
      title: "Foundation",
      description: "TOR Refinery was founded with a vision to revolutionize the oil refining industry.",
    },
    {
      year: "1985",
      title: "First Major Expansion",
      description: "Completed our first major facility expansion, doubling production capacity.",
    },
    {
      year: "1995",
      title: "Environmental Leadership",
      description: "Launched comprehensive environmental initiatives, setting industry standards.",
    },
    {
      year: "2005",
      title: "Technology Innovation",
      description: "Invested in cutting-edge refining technology, improving efficiency by 40%.",
    },
    {
      year: "2015",
      title: "Global Recognition",
      description: "Received international recognition for safety and environmental excellence.",
    },
    {
      year: "2020",
      title: "Sustainability Commitment",
      description: "Announced ambitious sustainability goals and carbon reduction targets.",
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to lead the industry with innovation and sustainable practices.",
    },
  ];

  return (
    <>
      <Hero
        title="Our History"
        subtitle="Five Decades of Excellence"
        description="A journey of growth, innovation, and commitment to excellence in oil refining."
      />

      <Section title="Our Journey Through Time">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 flex-1">
                    <Card hover>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-primary-500 font-bold text-lg">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Key Achievements"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
            <h3 className="text-xl font-bold mb-2">Years of Excellence</h3>
            <p className="text-gray-600">Five decades of continuous operation and growth in the refining industry.</p>
          </Card>

          <Card>
            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
            <h3 className="text-xl font-bold mb-2">Safety Awards</h3>
            <p className="text-gray-600">Recognized for outstanding safety performance and zero-incident records.</p>
          </Card>

          <Card>
            <div className="text-4xl font-bold text-primary-500 mb-2">$2B+</div>
            <h3 className="text-xl font-bold mb-2">Investments</h3>
            <p className="text-gray-600">Strategic investments in technology, infrastructure, and sustainability.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}

