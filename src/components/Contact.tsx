import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hi, I'm ${formData.name}. I'm interested in ${formData.course || 'CUET coaching'}. 
Contact: ${formData.phone} | Email: ${formData.email}
Message: ${formData.message || 'Please provide more details about the course.'}`;
    
    window.open(`https://wa.me/917909228688?text=${encodeURIComponent(message)}`, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call/WhatsApp",
      details: "+91 7909 228 688",
      action: "tel:+917909228688",
      color: "text-mentrr-green"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@mentrr.in",
      action: "mailto:info@mentrr.in", 
      color: "text-mentrr-orange"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kerala, India",
      action: "#",
      color: "text-mentrr-navy"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9 AM - 6 PM",
      action: "#",
      color: "text-mentrr-yellow"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-mentrr-navy to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            📞 Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-mentrr-green">Success Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Contact us today to begin your CUET preparation with Kerala&apos;s #1 coaching institute. We&apos;re here to guide you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-blue-100 mb-8">
                Have questions about our courses? Ready to enroll? Our expert counselors are here to help you choose the right path for your CUET success.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${info.color === 'text-mentrr-green' ? 'bg-mentrr-green/20' : info.color === 'text-mentrr-orange' ? 'bg-mentrr-orange/20' : info.color === 'text-mentrr-navy' ? 'bg-white/20' : 'bg-mentrr-yellow/20'}`}>
                    <info.icon className={`h-6 w-6 ${info.color === 'text-mentrr-navy' ? 'text-white' : info.color}`} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                  <p className="text-blue-100">{info.details}</p>
                  {info.action !== "#" && (
                    <a 
                      href={info.action}
                      className="inline-flex items-center text-mentrr-green hover:text-mentrr-orange transition-colors mt-2 text-sm font-medium"
                    >
                      Contact Now →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/mentrr_learning/" 
                  target="_blank"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg text-white hover:bg-mentrr-green hover:scale-110 transition-all duration-300"
                >
                  📱
                </a>
                <a 
                  href="https://wa.me/917909228688" 
                  target="_blank"
                  className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg text-white hover:bg-mentrr-green hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-mentrr-navy mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form and we&apos;ll get back to you within 24 hours</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors"
                    placeholder="+91 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Interest
                </label>
                <select
                  name="course"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors"
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <option value="">Select a course</option>
                  <option value="CUET UG">CUET UG</option>
                  <option value="CUET PG">CUET PG</option>
                  <option value="NCET">NCET</option>
                  <option value="All Courses">All Courses</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors resize-none"
                  placeholder="Tell us about your goals and how we can help you..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <Button 
                type="button"
                variant="mentrr" 
                className="w-full text-lg py-3"
                onClick={handleWhatsAppSubmit}
                disabled={!formData.name || !formData.email || !formData.phone}
              >
                Send Message via WhatsApp
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to receive communication from Mentrr Learning via WhatsApp and email.
              </p>
            </form>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-mentrr-green to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don&apos;t Wait - Your Dream University is Calling!</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who trusted Mentrr Learning for their CUET preparation. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="mentrr-outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-mentrr-green"
                onClick={() => window.open("https://wa.me/917909228688?text=Hi, I want to start my CUET preparation with Mentrr Learning", "_blank")}
              >
                Start Now - Call +91 7909 228 688
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;