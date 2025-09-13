import { Brain, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const SolutionSection = () => {
  const capabilities = [
    {
      icon: Users,
      title: "User Research AI",
      description: "Continuous user insights without endless interviews",
      benefits: ["Real-time user feedback analysis", "Behavioral pattern recognition", "Need-gap identification"]
    },
    {
      icon: Target,
      title: "Feature Prioritization AI",
      description: "Data-driven decisions instead of stakeholder politics",
      benefits: ["Impact vs effort scoring", "User value mapping", "ROI predictions"]
    },
    {
      icon: TrendingUp,
      title: "Roadmap AI",
      description: "Strategic product planning based on actual user value",
      benefits: ["Coherent product vision", "Stakeholder alignment", "Strategic sequencing"]
    },
    {
      icon: Brain,
      title: "Market Analysis AI",
      description: "Competitive intelligence and positioning guidance",
      benefits: ["Competitive gap analysis", "Market opportunity sizing", "Positioning strategy"]
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build Products Users <span className="bg-gradient-to-r from-hero-purple to-hero-blue bg-clip-text text-transparent">Love</span>, 
            Not Committee Compromises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform from reactive stakeholder management to proactive product leadership with AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-hero-purple/10 to-hero-blue/10 text-primary group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {capability.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-hero-purple to-hero-blue rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stop Building Frankenstein Products
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get the clarity you need to build products that users love and stakeholders respect.
          </p>
          <GradientButton variant="subtle" size="xl" className="bg-white text-primary hover:bg-white/90">
            Start Building Better Products
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;