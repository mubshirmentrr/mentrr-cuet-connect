import { Award, Target, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const achievements = [
    { icon: Users, number: "4000+", label: "Successful Students" },
    { icon: Award, number: "5", label: "Years of Excellence" },
    { icon: BookOpen, number: "3", label: "Exam Categories" },
    { icon: Target, number: "97.43%", label: "Success Rate" }
  ];

  const features = [
    {
      title: "Expert Faculty",
      description: "Experienced teachers with deep subject knowledge and proven track record in CUET coaching.",
      icon: "👨‍🏫"
    },
    {
      title: "Comprehensive Study Material", 
      description: "Updated curriculum and practice materials aligned with latest CUET exam patterns.",
      icon: "📚"
    },
    {
      title: "Regular Mock Tests",
      description: "Frequent assessments and mock exams to track progress and improve performance.",
      icon: "📝"
    },
    {
      title: "Personal Mentoring",
      description: "One-on-one guidance and doubt clearing sessions for individual attention.",
      icon: "🎯"
    },
    {
      title: "Online & Offline Classes",
      description: "Flexible learning options with both physical and digital classroom experiences.",
      icon: "💻"
    },
    {
      title: "Success Tracking",
      description: "Regular performance analysis and improvement strategies for better results.",
      icon: "📊"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mentrr-orange/10 text-mentrr-orange rounded-full text-sm font-medium mb-4">
            🎯 About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mentrr-navy mb-6">
            Kerala&apos;s <span className="text-mentrr-green">#1 CUET</span> Coaching Institute
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Mentrr Learning, we&apos;ve been transforming dreams into reality by providing exceptional CUET coaching that ensures success in India&apos;s most competitive entrance exams.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-mentrr-navy">
                Empowering Students Since Day One
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to democratize quality education, Mentrr Learning has become Kerala&apos;s most trusted name in CUET preparation. Our innovative teaching methodology, experienced faculty, and student-centric approach have helped thousands of students secure admissions in India&apos;s top central universities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every student has the potential to achieve greatness. Our role is to unlock that potential through comprehensive coaching, personalized attention, and unwavering support throughout their preparation journey.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                "Proven track record with 4000+ successful students",
                "Expert faculty with years of teaching experience", 
                "Comprehensive study material and regular assessments",
                "Personalized mentoring and doubt clearing sessions"
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-mentrr-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="mentrr" 
              size="lg"
              onClick={() => window.open("https://wa.me/917909228688?text=Hi, I want to know more about Mentrr Learning", "_blank")}
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Achievement Stats */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl text-center border-2 border-mentrr-green/30 hover:border-mentrr-green hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-mentrr-green/20 rounded-xl mb-4">
                  <achievement.icon className="h-8 w-8 text-mentrr-green" />
                </div>
                <div className="text-3xl font-bold text-mentrr-navy mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-mentrr-navy mb-4">
              What Makes Us <span className="text-mentrr-green">Different</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique approach to CUET coaching combines traditional teaching excellence with modern learning methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-2 border-mentrr-green/20 hover:border-mentrr-green/40"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-mentrr-navy mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-mentrr-green/10 to-emerald-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-mentrr-navy mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide world-class CUET coaching that empowers every student to achieve their academic goals and secure admission in their dream central university through comprehensive preparation and personalized guidance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-mentrr-orange/10 to-orange-50 rounded-2xl p-8">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-mentrr-navy mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as India&apos;s leading educational institute that transforms aspirations into achievements, making quality higher education accessible to every deserving student across the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;