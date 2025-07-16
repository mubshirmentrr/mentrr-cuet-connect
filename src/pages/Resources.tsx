import { FileText, Download, BookOpen, Target, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PYQLeadMagnet from "@/components/PYQLeadMagnet";

const Resources = () => {
  const features = [
    {
      icon: BookOpen,
      title: "1000+ Questions",
      description: "Comprehensive collection covering all subjects"
    },
    {
      icon: Target,
      title: "Detailed Solutions",
      description: "Step-by-step explanations for better understanding"
    },
    {
      icon: FileText,
      title: "Subject-wise",
      description: "Organized by subjects for focused preparation"
    },
    {
      icon: Award,
      title: "Previous 3 Years",
      description: "Latest question patterns and trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-mentrr-navy via-blue-900 to-mentrr-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-mentrr-green/20 text-mentrr-green rounded-full text-sm font-medium border border-mentrr-green/30 mb-6">
            🎯 Free CUET Resources
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            FREE CUET Question Bank
            <span className="block text-mentrr-green mt-2">Download Now</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get 3 years of previous year questions with detailed solutions to boost your CUET preparation
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-mentrr-green/40 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-mentrr-green/20 rounded-xl mb-4 group-hover:bg-mentrr-green/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-mentrr-green" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Download Section */}
          <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-3 h-3 bg-mentrr-green rounded-full animate-pulse"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Download Your Free PYQ Pack</h2>
                <div className="w-3 h-3 bg-mentrr-green rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg">
                Start your CUET preparation today with our comprehensive question bank
              </p>
              
              <div className="space-y-6">
                <PYQLeadMagnet />
                
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 pt-4">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mentrr-green rounded-full"></div>
                    Instant Download
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mentrr-green rounded-full"></div>
                    No Hidden Fees
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mentrr-green rounded-full"></div>
                    Updated Content
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-mentrr-green/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-mentrr-green/30">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need More Help with CUET Preparation?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join Kerala's #1 CUET coaching institute and get personalized guidance
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => window.open("https://wa.me/+917909228688", "_blank")}
            >
              Contact Our Experts
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;