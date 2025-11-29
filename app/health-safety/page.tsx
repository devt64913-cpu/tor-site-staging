import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { IconShieldCheck, IconBook, IconAlertTriangle, IconHeart, IconCheck } from "@tabler/icons-react";

export default function HealthSafety() {
  const safetyPillars = [
    {
      title: "Prevention First",
      description: "Proactive risk identification and mitigation to prevent incidents before they occur.",
      icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Continuous Training",
      description: "Comprehensive safety training programs ensuring all personnel are equipped with the latest knowledge.",
      icon: <IconBook className="w-8 h-8" />,
    },
    {
      title: "Emergency Response",
      description: "Well-prepared emergency response teams and procedures to handle any situation effectively.",
      icon: <IconAlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health programs promoting physical and mental well-being of all employees.",
      icon: <IconHeart className="w-8 h-8" />,
    },
  ];

  const safetyMetrics = [
    { label: "Lost Time Injury Rate", value: "0.12", unit: "per million hours", description: "Industry-leading safety performance" },
    { label: "Total Recordable Cases", value: "0.8", unit: "per million hours", description: "Well below industry average" },
    { label: "Safety Training Hours", value: "50,000+", unit: "annually", description: "Comprehensive training programs" },
    { label: "Safety Observations", value: "10,000+", unit: "per year", description: "Proactive safety monitoring" },
  ];

  const policies = [
    {
      title: "Personal Protective Equipment",
      description: "Mandatory use of appropriate PPE for all personnel in operational areas.",
    },
    {
      title: "Process Safety Management",
      description: "Comprehensive process safety management systems to prevent major incidents.",
    },
    {
      title: "Occupational Health",
      description: "Regular health screenings and medical surveillance programs for employee well-being.",
    },
    {
      title: "Contractor Safety",
      description: "Strict safety requirements and training for all contractors and visitors.",
    },
    {
      title: "Environmental Health",
      description: "Protecting the health of surrounding communities through emission controls.",
    },
    {
      title: "Incident Reporting",
      description: "Transparent reporting and investigation of all incidents with corrective actions.",
    },
  ];

  return (
    <>
      <Hero
        title="Health & Safety Policy"
        subtitle="Safety First, Always"
        description="Our unwavering commitment to the health and safety of our employees, contractors, and communities."
      />

      <Section
        title="Our Safety Philosophy"
        description="Zero incidents is our goal, and safety is everyone's responsibility"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At TOR Refinery, safety is not just a priority—it's a core value that guides every decision 
                and action. We believe that all incidents are preventable, and we are committed to achieving 
                zero harm to people, property, and the environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive Health and Safety Management System integrates risk management, 
                continuous improvement, and a strong safety culture throughout the organization. 
                Every employee, from leadership to frontline workers, plays a vital role in maintaining 
                our excellent safety record.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section
        title="Our Safety Pillars"
        description="Four fundamental principles guiding our safety approach"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyPillars.map((pillar, index) => (
            <Card key={index} hover>
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Safety Performance">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyMetrics.map((metric, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">{metric.value}</div>
              <div className="text-sm text-primary-600 mb-2">{metric.unit}</div>
              <h3 className="font-semibold text-lg mb-2">{metric.label}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Key Safety Policies"
        description="Comprehensive policies ensuring safety across all operations"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => (
            <Card key={index} hover>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
              <p className="text-gray-600 leading-relaxed">{policy.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Safety Culture"
        description="Building a culture where safety comes first"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold mb-4">Employee Engagement</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Safety committees with employee representation</span>
                </li>
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Stop work authority for all employees</span>
                </li>
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Safety recognition and reward programs</span>
                </li>
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular safety meetings and communications</span>
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular safety audits and inspections</span>
                </li>
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Root cause analysis for all incidents</span>
                </li>
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Benchmarking against industry best practices</span>
                </li>
                <li className="flex items-start">
                  <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Investment in safety technology and equipment</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Our Commitment"
        description="Safety is non-negotiable"
        className="bg-primary-500 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-6 leading-relaxed">
            We are committed to maintaining the highest standards of health and safety. 
            Every employee has the right to a safe workplace, and every employee has the 
            responsibility to maintain that safety. Together, we can achieve zero incidents.
          </p>
          <p className="text-lg text-primary-100">
            Safety is not just our policy—it's our promise to our employees, their families, 
            and the communities we serve.
          </p>
        </div>
      </Section>
    </>
  );
}

