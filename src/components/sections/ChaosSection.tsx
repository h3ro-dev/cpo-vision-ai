import { AlertTriangle, Users, Code, TrendingUp, Clock, Target } from "lucide-react";

const ChaosSection = () => {
  const chaosPoints = [
    {
      icon: TrendingUp,
      title: "Sales wants enterprise features for one big deal.",
      subtitle: "Users are screaming the product is too complex.",
      color: "text-chaos-orange"
    },
    {
      icon: Code,
      title: "Engineering says 'technical debt first'",
      subtitle: "while CEO says 'ship features faster'",
      color: "text-chaos-red"
    },
    {
      icon: Target,
      title: "Your roadmap changes weekly",
      subtitle: "based on whoever screamed loudest",
      color: "text-chaos-orange"
    },
    {
      icon: Clock,
      title: "User research takes months you don't have",
      subtitle: "while competitors ship based on actual insights",
      color: "text-chaos-red"
    }
  ];

  return (
    <section id="chaos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The CPO of One <span className="text-chaos-red">Frankenstein</span> You're Being Forced to Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop building products by committee. Start building products users actually want.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {chaosPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gray-50 ${point.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">
                      {point.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-chaos-red/10 to-chaos-orange/10 rounded-2xl p-8 border border-chaos-red/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-chaos-red/10 text-chaos-red">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Product Isolation Crisis
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You're making product decisions that affect thousands of users with input from people 
                who've never talked to a customer. Every stakeholder has an opinion, but none of them 
                have user insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;