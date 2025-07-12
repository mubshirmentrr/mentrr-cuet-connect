import { BookOpen, Clock, Users, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "CUET UG",
      subtitle: "Common University Entrance Test - Undergraduate",
      description: "Comprehensive preparation for CUET UG covering all subjects with expert faculty and proven methodology.",
      features: [
        "Top Educators - Live and recorded classes",
        "Class notes & Chapter wise Value Added Notes",
        "50+ Sectional Tests",
        "15+ Full Length Mock Tests",
        "Previous Year Question Papers",
        "PYQ mock tests",
        "DPP's with Video Solutions",
        "Formula Sheet",
        "1:1 Personal Mentorship"
      ],
      duration: "6-12 Months",
      students: "2500+ Students",
      
      price: "Starting from ₹15,000",
      image: "🎓",
      color: "from-mentrr-green to-emerald-500"
    },
    {
      title: "CUET PG", 
      subtitle: "Common University Entrance Test - Postgraduate",
      description: "Specialized coaching for CUET PG with subject-wise preparation and research methodology training.",
      features: [
        "Top Educators - Live and recorded classes",
        "Class notes & Chapter wise Value Added Notes",
        "50+ Sectional Tests",
        "15+ Full Length Mock Tests",
        "Previous Year Question Papers",
        "PYQ mock tests",
        "DPP's with Video Solutions",
        "Formula Sheet",
        "1:1 Personal Mentorship"
      ],
      duration: "4-8 Months",
      students: "1200+ Students", 
      
      price: "Starting from ₹20,000",
      image: "📚",
      color: "from-mentrr-navy to-blue-600"
    },
    {
      title: "NCET",
      subtitle: "National Common Entrance Test",
      description: "Complete preparation for NCET with comprehensive coverage of all sections and exam patterns.",
      features: [
        "Top Educators - Live and recorded classes",
        "Class notes & Chapter wise Value Added Notes",
        "50+ Sectional Tests",
        "15+ Full Length Mock Tests",
        "Previous Year Question Papers",
        "PYQ mock tests",
        "DPP's with Video Solutions",
        "Formula Sheet",
        "1:1 Personal Mentorship"
      ],
      duration: "3-6 Months",
      students: "300+ Students",
       
      price: "Starting from ₹12,000",
      image: "🏆",
      color: "from-mentrr-orange to-red-500"
    }
  ];

  const handleWhatsAppClick = (course: string) => {
    const message = `Hi, I'm interested in the ${course} course. Please provide more details.`;
    window.open(`https://wa.me/917909228688?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mentrr-green/10 text-mentrr-green rounded-full text-sm font-medium mb-4">
            📖 Our Courses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mentrr-navy mb-6">
            Choose Your <span className="text-mentrr-green">Success Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help you crack CUET UG, CUET PG, and NCET with confidence and achieve your dream university admission.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{course.image}</div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-white/90 text-sm">{course.subtitle}</p>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-6">
                <p className="text-gray-600">{course.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-mentrr-navy">Course Highlights:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-mentrr-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-mentrr-orange mx-auto mb-1" />
                    <div className="text-sm font-medium text-mentrr-navy">{course.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-mentrr-green mx-auto mb-1" />
                    <div className="text-sm font-medium text-mentrr-navy">{course.students}</div>
                    <div className="text-xs text-gray-500">Enrolled</div>
                  </div>
                </div>

                {/* Price */}
                <div className="py-2 text-center">
                  <div className="text-lg font-bold text-mentrr-navy">{course.price}</div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="mentrr" 
                  className="w-full"
                  onClick={() => handleWhatsAppClick(course.title)}
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-mentrr-light-blue to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-mentrr-navy mb-4">Why Choose Mentrr Learning?</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-mentrr-green/20 rounded-xl flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-mentrr-green" />
              </div>
              <h4 className="font-semibold text-mentrr-navy">Expert Faculty</h4>
              <p className="text-gray-600 text-sm">Experienced teachers with proven track record</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-mentrr-orange/20 rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-mentrr-orange" />
              </div>
              <h4 className="font-semibold text-mentrr-navy">Small Batches</h4>
              <p className="text-gray-600 text-sm">Personalized attention for every student</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-mentrr-navy/20 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-mentrr-navy" />
              </div>
              <h4 className="font-semibold text-mentrr-navy">Proven Results</h4>
              <p className="text-gray-600 text-sm">4000+ successful admissions</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-mentrr-yellow/20 rounded-xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-mentrr-yellow" />
              </div>
              <h4 className="font-semibold text-mentrr-navy">Quality Material</h4>
              <p className="text-gray-600 text-sm">Comprehensive study resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;