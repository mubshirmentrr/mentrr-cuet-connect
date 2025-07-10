import { Star, Award, Users, BookOpen, ArrowRight, GraduationCap, Trophy, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PYQLeadMagnet from "./PYQLeadMagnet";

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: "4000+", label: "Successful Students" },
    { icon: Trophy, value: "#1", label: "CUET Institute in Kerala" },
    { icon: Target, value: "3", label: "Exam Categories" },
    { icon: TrendingUp, value: "5.0", label: "Student Rating" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+917909228688", "_blank");
  };

  const handleStartJourney = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-mentrr-navy via-blue-900 to-mentrr-navy overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-mentrr-green/20 text-mentrr-green rounded-full text-sm font-medium border border-mentrr-green/30">
                🏆 Kerala&apos;s #1 CUET Coaching Institute
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Your Dream College is
                <br />
                <span className="text-mentrr-green">
                  Just One CUET Away
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Join 4000+ students who got into their dream colleges with our proven CUET coaching. We make CUET preparation simple, effective, and stress-free with expert guidance and smart study plans.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={handleStartJourney}
              >
                Discover Our Proven System
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="mentrr-outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-mentrr-navy"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Success Stories
              </Button>
            </div>

            {/* PYQ Lead Magnet */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">🎯 FREE: CUET Question Bank</h3>
                <p className="text-gray-300 text-sm">Get 3 years of previous year questions with detailed solutions to boost your CUET preparation</p>
                <PYQLeadMagnet />
              </div>
            </div>

          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center border-2 border-mentrr-green/30 hover:border-mentrr-green transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-mentrr-green/20 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-mentrr-green" />
                </div>
                <div className="text-3xl font-bold text-mentrr-navy mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-mentrr-orange/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-mentrr-green/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;