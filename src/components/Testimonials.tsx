import { Star, Trophy, GraduationCap } from "lucide-react";

const Testimonials = () => {
  const successStories = [
    {
      name: "Shamseena S",
      subject: "Political Science",
      achievement: "Full Mark 200/200",
      image: "/lovable-uploads/df46e0c0-a73b-4a1d-b9c6-38d958abf609.png",
      university: "Delhi University",
      quote: "Mentrr's teaching methodology helped me achieve perfect scores in CUET."
    },
    {
      name: "Devipriya Suman",
      subject: "Business Studies",
      achievement: "Full Mark 200/200",
      image: "/lovable-uploads/df46e0c0-a73b-4a1d-b9c6-38d958abf609.png",
      university: "Delhi University",
      quote: "The mock tests and personalized guidance were game-changers for my preparation."
    },
    {
      name: "Clara Aloysius",
      subject: "Political Science",
      achievement: "Full Mark 200/200",
      image: "/lovable-uploads/df46e0c0-a73b-4a1d-b9c6-38d958abf609.png",
      university: "Delhi University",
      quote: "Excellent faculty and comprehensive study material made all the difference."
    },
    {
      name: "Shadhaa",
      subject: "BA (Hons) Sociology",
      achievement: "AIR 03",
      image: "/lovable-uploads/5c17741b-6f85-43f5-ab3b-de8b515e3439.png",
      university: "Jamia Millia Islamia University",
      quote: "From dreaming about it to achieving it - Mentrr made it possible!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-mentrr-light-blue to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mentrr-green/10 text-mentrr-green rounded-full text-sm font-medium mb-4">
            🎉 Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mentrr-navy mb-6">
            Our Students&apos; <span className="text-mentrr-green">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the league of 4000+ successful students who cracked CUET with our proven guidance and secured admissions in top universities across India.
          </p>
        </div>

        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-mentrr-green to-emerald-500 rounded-2xl p-8 mb-16 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Trophy className="h-12 w-12 mx-auto text-yellow-300" />
              <div className="text-3xl font-bold">Kerala&apos;s #1</div>
              <div className="text-green-100">CUET Coaching Institute</div>
            </div>
            <div className="space-y-2">
              <GraduationCap className="h-12 w-12 mx-auto text-yellow-300" />
              <div className="text-3xl font-bold">4000+</div>
              <div className="text-green-100">Successful Students</div>
            </div>
            <div className="space-y-2">
              <Star className="h-12 w-12 mx-auto text-yellow-300" />
              <div className="text-3xl font-bold">97.43%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="text-center space-y-4">
                {/* Achievement Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-mentrr-orange/10 text-mentrr-orange rounded-full text-xs font-medium">
                  {story.achievement}
                </div>

                {/* Student Photo Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-mentrr-green/20 to-mentrr-navy/20 rounded-full mx-auto flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-mentrr-navy" />
                </div>

                {/* Student Info */}
                <div>
                  <h3 className="font-bold text-mentrr-navy text-lg">{story.name}</h3>
                  <p className="text-gray-600 text-sm">{story.subject}</p>
                  <p className="text-mentrr-green font-medium text-sm">{story.university}</p>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-mentrr-yellow text-mentrr-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm italic">
                  &quot;{story.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-mentrr-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Start your CUET preparation journey with Kerala&apos;s most trusted coaching institute
            </p>
            <button 
              onClick={() => window.open("https://wa.me/917909228688?text=Hi, I want to join Mentrr Learning for CUET preparation", "_blank")}
              className="bg-mentrr-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-mentrr-green/90 transition-colors"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;