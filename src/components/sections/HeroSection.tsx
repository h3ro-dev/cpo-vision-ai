import { ArrowDown, Users, Code, TrendingUp, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/cpo-chaos-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-hero-purple via-primary to-hero-blue overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
      
      {/* Floating conflict arrows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 animate-pulse">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            <TrendingUp className="w-4 h-4" />
            Sales: "More enterprise features!"
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse delay-1000">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            <Code className="w-4 h-4" />
            Engineering: "Fix tech debt first"
          </div>
        </div>
        <div className="absolute bottom-1/3 left-20 animate-pulse delay-2000">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            <Users className="w-4 h-4" />
            Users: "Too complex!"
          </div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-pulse delay-500">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            <AlertTriangle className="w-4 h-4" />
            CEO: "Ship faster!"
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Users Want Simplicity.{" "}
                <span className="text-yellow-300">Sales Wants Features.</span>{" "}
                Engineers Want{" "}
                <span className="text-red-300">Debt Fixed.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                You Want One Coherent Product.
              </h2>
            </div>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Your product vision is being shredded by stakeholder opinions. 
              You're building a Frankenstein, not a product.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg text-white/90 italic">
                "When did product strategy become stakeholder appeasement?"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solution" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                Clarify My Product Strategy
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#chaos" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                See The Chaos
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="CPO surrounded by conflicting stakeholder demands and fragmented product roadmap" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;