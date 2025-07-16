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
              <div className="inline-flex items-center px-4 py-2 bg-mentrr-green/20 text-mentrr-green rounded-full text-sm font-medium border border-mentrr-green/30">
                🏆 Kerala&apos;s #1 CUET Coaching Institute
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Crack CUET with Confidence
                <br />
                <span className="text-mentrr-green">
                  with Mentrr
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
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="mentrr-outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-mentrr-navy"
                onClick={() => {
                  console.log('View Success Stories button clicked');
                  const testimonialsSection = document.getElementById('testimonials');
                  console.log('Testimonials section found:', testimonialsSection);
                  if (testimonialsSection) {
                    testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    setTimeout(() => {
                      const testimonialsElement = document.querySelector('[id="testimonials"]');
                      console.log('Alternative testimonials element:', testimonialsElement);
                      if (testimonialsElement) {
                        testimonialsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }
                }}
              >
                View Success Stories
              </Button>
            </div>

            {/* PYQ Lead Magnet */}
            <div className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-mentrr-green rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-semibold text-white">🎯 FREE: CUET Question Bank</h3>
                  <div className="w-2 h-2 bg-mentrr-green rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-300 text-sm">Get 3 years of previous year questions with detailed solutions to boost your CUET preparation</p>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-mentrr-green rounded-full"></div>
                    1000+ Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-mentrr-green rounded-full"></div>
                    Detailed Solutions
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-mentrr-green rounded-full"></div>
                    Subject-wise
                  </span>
                </div>
                <PYQLeadMagnet />
              </div>
            </div>

          </div>

          {/* Right Content - Enhanced Stats Grid */}
          <div className="space-y-6 animate-slide-up">
            {/* Quick Stats Banner */}
            <div className="bg-gradient-to-r from-mentrr-green/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-mentrr-green/30 text-center">
              <div className="text-white space-y-2">
                <div className="text-3xl font-bold">4000+</div>
                <div className="text-sm text-gray-300">Students Placed in Top Universities</div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-mentrr-yellow text-mentrr-yellow" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">4.9/5 Student Rating</span>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
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
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-mentrr-orange/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-mentrr-green/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;