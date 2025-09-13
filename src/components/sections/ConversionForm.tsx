import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const ConversionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productType: "",
    stakeholderChaos: "",
    userContact: "",
    challenges: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-success-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success-green" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategy Session Requested!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We'll analyze your product chaos and send you a personalized strategy within 24 hours.
            </p>
            <div className="bg-gradient-to-r from-hero-purple/10 to-hero-blue/10 rounded-lg p-6 border border-primary/20">
              <p className="text-gray-700">
                Check your email for next steps and access to our CPO toolkit.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build the Product Your Users <span className="bg-gradient-to-r from-hero-purple to-hero-blue bg-clip-text text-transparent">Actually Need</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get a personalized product strategy analysis and roadmap clarity session.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-11"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700 font-medium">Company</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productType" className="text-gray-700 font-medium">What type of product do you lead?</Label>
                <Select value={formData.productType} onValueChange={(value) => handleInputChange("productType", value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS Platform</SelectItem>
                    <SelectItem value="mobile">Mobile App</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="enterprise">Enterprise Software</SelectItem>
                    <SelectItem value="consumer">Consumer Product</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="stakeholderChaos" className="text-gray-700 font-medium">Rate your stakeholder alignment (1-10)</Label>
                <Select value={formData.stakeholderChaos} onValueChange={(value) => handleInputChange("stakeholderChaos", value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="1 = chaos, 10 = aligned" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Complete chaos</SelectItem>
                    <SelectItem value="2">2 - Mostly chaotic</SelectItem>
                    <SelectItem value="3">3 - Very misaligned</SelectItem>
                    <SelectItem value="4">4 - Somewhat misaligned</SelectItem>
                    <SelectItem value="5">5 - Neutral</SelectItem>
                    <SelectItem value="6">6 - Somewhat aligned</SelectItem>
                    <SelectItem value="7">7 - Mostly aligned</SelectItem>
                    <SelectItem value="8">8 - Well aligned</SelectItem>
                    <SelectItem value="9">9 - Very well aligned</SelectItem>
                    <SelectItem value="10">10 - Perfect alignment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="userContact" className="text-gray-700 font-medium">How often do you talk directly to users?</Label>
                <Select value={formData.userContact} onValueChange={(value) => handleInputChange("userContact", value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="rarely">Rarely</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <Label htmlFor="challenges" className="text-gray-700 font-medium">What's your biggest product challenge right now?</Label>
              <Textarea
                id="challenges"
                placeholder="Describe your main product challenge..."
                value={formData.challenges}
                onChange={(e) => handleInputChange("challenges", e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>

            <GradientButton 
              type="submit" 
              size="xl" 
              className="w-full"
            >
              Clarify My Product Strategy
              <ArrowRight className="w-5 h-5" />
            </GradientButton>

            <p className="text-sm text-gray-500 text-center mt-4">
              Free strategy session • No spam • Unsubscribe anytime
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;