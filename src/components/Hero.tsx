import { Star, Award, Users, BookOpen, ArrowRight, GraduationCap, Trophy, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PYQLeadMagnet from "./PYQLeadMagnet";

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: "4000+", label: "Successful Students" },
    { icon: Trophy, value: "#1", label: "CUET Institute in Kerala" },
    { icon: Target, value: "3", label: "Exam Categories" },
    { icon: TrendingUp, value: "97.43%", label: "Success Rate" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+917909228688", "_blank");
  };

  const handleStartJourney = () => {
    console.log('Start Journey button clicked');
    const coursesSection = document.getElementById('courses');
    console.log('Courses section found:', coursesSection);
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('Courses section not found, trying alternative method');
      // Force scroll to courses section
      setTimeout(() => {
        const coursesElement = document.querySelector('[id="courses"]');
        console.log('Alternative courses element:', coursesElement);
        if (coursesElement) {
          coursesElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Crack CUET with <span className="text-mentrr-green">Kerala's #1</span> CUET Coaching Institution
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
                Join 4000+ students who cracked CUET with expert guidance and proven strategies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 w-full sm:w-auto"
                onClick={handleStartJourney}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>


          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 text-center border-2 border-mentrr-green/20 hover:border-mentrr-green/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-mentrr-green/20 to-mentrr-green/30 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-mentrr-green" />
                </div>
                <div className="text-2xl font-bold text-mentrr-navy mb-1 group-hover:text-mentrr-green transition-colors duration-300">{stat.value}</div>
                <div className="text-gray-600 text-xs font-medium">{stat.label}</div>
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