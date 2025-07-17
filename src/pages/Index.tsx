import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Universities from "@/components/Universities";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import PYQLeadMagnet from "@/components/PYQLeadMagnet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Courses />
        
        {/* PYQ Lead Magnet Section */}
        <section className="py-16 bg-gradient-to-r from-mentrr-green to-emerald-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-mentrr-navy mb-4">
                Get Free Previous Year Questions
              </h2>
              <p className="text-gray-600 mb-6">
                Download our comprehensive collection of CUET previous year questions and boost your preparation.
              </p>
              <PYQLeadMagnet />
            </div>
          </div>
        </section>
        
        <Universities />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
