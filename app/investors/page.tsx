import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { IconFileText, IconTrendingUp, IconShieldCheck, IconBolt } from "@tabler/icons-react";

export default function Investors() {
  const financialHighlights = [
    {
      metric: "Revenue",
      value: "$12.5B",
      change: "+8.2%",
      period: "FY 2023",
      trend: "up",
    },
    {
      metric: "Net Income",
      value: "$1.8B",
      change: "+12.5%",
      period: "FY 2023",
      trend: "up",
    },
    {
      metric: "EBITDA",
      value: "$2.5B",
      change: "+10.3%",
      period: "FY 2023",
      trend: "up",
    },
    {
      metric: "Production",
      value: "500K+",
      change: "+5.0%",
      period: "Barrels/Day",
      trend: "up",
    },
  ];

  const reports = [
    {
      title: "Annual Report 2023",
      type: "Annual Report",
      date: "March 2024",
      description: "Comprehensive overview of our financial performance and strategic initiatives.",
    },
    {
      title: "Q4 2023 Earnings",
      type: "Quarterly Report",
      date: "February 2024",
      description: "Fourth quarter financial results and operational highlights.",
    },
    {
      title: "Sustainability Report 2023",
      type: "Sustainability",
      date: "January 2024",
      description: "Our environmental performance and sustainability achievements.",
    },
    {
      title: "Q3 2023 Earnings",
      type: "Quarterly Report",
      date: "November 2023",
      description: "Third quarter financial results and business updates.",
    },
  ];

  const stockInfo = {
    symbol: "TOR",
    price: "$45.32",
    change: "+2.3%",
    exchange: "NYSE",
  };

  return (
    <>
      <Hero
        title="Investor Relations"
        subtitle="Investing in Excellence"
        description="Committed to creating long-term value for our shareholders through operational excellence and strategic growth."
      />

      <Section
        title="Stock Information"
        description="Current trading information"
      >
        <Card className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-500 mb-1">Symbol</div>
              <div className="text-2xl font-bold text-gray-900">{stockInfo.symbol}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Price</div>
              <div className="text-2xl font-bold text-gray-900">{stockInfo.price}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Change</div>
              <div className="text-2xl font-bold text-primary-500">{stockInfo.change}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Exchange</div>
              <div className="text-2xl font-bold text-gray-900">{stockInfo.exchange}</div>
            </div>
          </div>
        </Card>
      </Section>

      <Section
        title="Financial Highlights"
        description="Key financial metrics and performance indicators"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financialHighlights.map((highlight, index) => (
            <Card key={index}>
              <div className="text-sm text-gray-500 mb-2">{highlight.metric}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{highlight.value}</div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{highlight.period}</span>
                <span className={`text-sm font-semibold ${
                  highlight.trend === "up" ? "text-accent-success" : "text-accent-error"
                }`}>
                  {highlight.change}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Financial Reports"
        description="Access our latest financial reports and documents"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, index) => (
            <Card key={index} hover>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2 inline-block">
                    {report.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{report.date}</p>
                </div>
                <IconFileText className="w-6 h-6 text-primary-500 flex-shrink-0" />
              </div>
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <Button variant="outline" size="sm">Download PDF</Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Why Invest in TOR"
        description="Strong fundamentals and growth prospects"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <IconTrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strong Financial Performance</h3>
            <p className="text-gray-600">
              Consistent revenue growth and profitability with strong cash flow generation.
            </p>
          </Card>

          <Card>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <IconShieldCheck className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Operational Excellence</h3>
            <p className="text-gray-600">
              Industry-leading safety record and operational efficiency driving superior margins.
            </p>
          </Card>

          <Card>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <IconBolt className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strategic Growth</h3>
            <p className="text-gray-600">
              Investment in technology and sustainability positioning for long-term value creation.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title="Upcoming Events"
        description="Mark your calendar for these investor events"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              date: "April 25, 2024",
              title: "Q1 2024 Earnings Call",
              time: "10:00 AM ET",
              type: "Conference Call",
            },
            {
              date: "June 10, 2024",
              title: "Investor Day 2024",
              time: "9:00 AM ET",
              type: "In-Person Event",
            },
            {
              date: "July 30, 2024",
              title: "Q2 2024 Earnings Call",
              time: "10:00 AM ET",
              type: "Conference Call",
            },
          ].map((event, index) => (
            <Card key={index} hover>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-primary-500 font-bold text-lg">{event.date.split(" ")[1]}</div>
                    <div className="text-gray-500 text-sm">{event.date.split(" ")[0]}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{event.time}</span>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Register</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Get in Touch"
        description="Contact our investor relations team"
        className="bg-primary-500 text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            For investor inquiries, please contact our Investor Relations team.
          </p>
          <Button href="/investor-contacts" variant="secondary" size="lg">
            Contact Investor Relations
          </Button>
        </div>
      </Section>
    </>
  );
}

