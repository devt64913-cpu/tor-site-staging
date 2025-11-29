"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Image from "next/image";
import { IconShieldCheck, IconWorld, IconBolt, IconUsers, IconTarget, IconEye, IconBulb, IconAward, IconShield, IconStar, IconUsersGroup, IconBrain, IconHeart, IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Hero
        title="About TOR Refinery"
        subtitle="Who We Are"
        description="A leading force in the oil refining industry, committed to excellence, innovation, and sustainable practices."
      />

      {/* Who We Are Section */}
      <Section
        title="Who We Are"
        description="A leading force in the oil refining industry"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              TOR Refinery has been at the forefront of the oil refining industry for more than 50 years. 
              Founded with a vision to transform the energy sector through innovation and excellence, we have 
              grown from a regional operation to a globally recognized leader in petroleum refining.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our commitment to operational excellence, environmental stewardship, and community engagement 
              has positioned us as a trusted partner for businesses and communities worldwide. We pride ourselves 
              on maintaining the highest standards of quality, safety, and sustainability in every aspect of our operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, TOR Refinery continues to invest in cutting-edge technology, expand our capabilities, and 
              strengthen our position as an industry leader while remaining true to our core values of integrity, 
              innovation, and responsibility.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision and Mission Section */}
      <Section
        title="Vision & Mission"
        description="Our guiding principles and core values"
        className="bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <IconEye className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading oil refining company in the region, recognized for excellence, innovation, 
                and sustainable practices that create lasting value for all stakeholders.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <IconTarget className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver high-quality petroleum products through operational excellence, innovation, and 
                sustainable practices while creating value for our customers, employees, shareholders, and communities.
              </p>
            </Card>
          </div>

          {/* Core Values - Flip Cards */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <FlipCard 
                value="Highest Standards" 
                icon={IconAward}
              />
              <FlipCard 
                value="Integrity" 
                icon={IconShield}
              />
              <FlipCard 
                value="Excellence" 
                icon={IconStar}
              />
              <FlipCard 
                value="Teamwork" 
                icon={IconUsersGroup}
              />
              <FlipCard 
                value="Competence" 
                icon={IconBrain}
              />
              <FlipCard 
                value="Respect" 
                icon={IconHeart}
              />
              <FlipCard 
                value="Respect for Environment" 
                icon={IconLeaf}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Our History Section */}
      <Section
        title="Our History"
        description="A journey of excellence spanning over five decades"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="TOR Refinery History"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Since our establishment, TOR Refinery has been a cornerstone of the energy sector, evolving and 
                  adapting to meet the changing needs of the industry. Our journey began with a commitment to excellence 
                  and a vision to become a leader in petroleum refining.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Over the decades, we have continuously invested in our facilities, expanded our production capacity, 
                  and enhanced our technological capabilities. Each milestone in our history represents our unwavering 
                  dedication to operational excellence and sustainable growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we stand as a testament to what can be achieved through perseverance, innovation, and a 
                  steadfast commitment to our core values. Our history is not just a record of achievements, but 
                  a foundation for our future aspirations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Our Strategy Section */}
      <Section
        title="Our Strategy"
        description="Maximizing value creation through strategic excellence"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Resting on our core competences and years of experience in rendering differentiated services to players 
              along the energy sector value chain with an agile and strategic approach to maximize value creation and 
              shareholder wealth.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Our Leadership"
        description="Experienced professionals driving our success"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-600">JD</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">John Davis</h3>
            <p className="text-primary-500 text-center mb-4">Chief Executive Officer</p>
            <p className="text-gray-600 text-center text-sm">
              With over 30 years of experience in the energy sector, John leads TOR Refinery with a vision for sustainable growth.
            </p>
          </Card>

          <Card>
            <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-600">SM</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Sarah Martinez</h3>
            <p className="text-primary-500 text-center mb-4">Chief Operating Officer</p>
            <p className="text-gray-600 text-center text-sm">
              Sarah brings extensive operational expertise and a commitment to excellence in refining operations.
            </p>
          </Card>

          <Card>
            <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-600">RW</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Robert Wilson</h3>
            <p className="text-primary-500 text-center mb-4">Chief Technology Officer</p>
            <p className="text-gray-600 text-center text-sm">
              Robert drives innovation and technology adoption to keep TOR at the forefront of the industry.
            </p>
          </Card>
        </div>
      </Section>

    </>
  );
}

// Flip Card Component for Core Values
function FlipCard({ value, icon: Icon }: { value: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="h-48 [perspective:1000px]">
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500"
        whileHover={{ rotateY: 180 }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 p-6 flex flex-col items-center justify-center shadow-lg">
          <Icon className="w-12 h-12 text-white mb-3" />
          <h4 className="text-white font-bold text-lg text-center">{value}</h4>
        </div>
        
        {/* Back of card */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] rounded-lg bg-white p-6 flex items-center justify-center shadow-lg border-2 border-primary-200"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-gray-700 text-sm text-center font-medium leading-relaxed">
            {getValueDescription(value)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function getValueDescription(value: string): string {
  const descriptions: Record<string, string> = {
    "Highest Standards": "We maintain the highest quality and safety standards in all our operations.",
    "Integrity": "We conduct business with honesty, transparency, and ethical principles.",
    "Excellence": "We strive for excellence in everything we do, continuously improving our performance.",
    "Teamwork": "We collaborate effectively, valuing diverse perspectives and collective success.",
    "Competence": "We develop and apply expertise to deliver superior results.",
    "Respect": "We treat all stakeholders with dignity, fairness, and consideration.",
    "Respect for Environment": "We are committed to environmental stewardship and sustainable practices."
  };
  return descriptions[value] || "A core value that guides our operations.";
}

