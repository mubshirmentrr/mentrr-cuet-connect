import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Universities", href: "#universities" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const courses = [
    { name: "CUET UG", href: "#courses" },
    { name: "CUET PG", href: "#courses" },
    { name: "NCET", href: "#courses" },
  ];

  return (
    <footer className="bg-mentrr-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/16940a6a-9a4a-4c0d-98be-282e03a204e2.png" 
                alt="Mentrr Learning" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-blue-100 leading-relaxed">
                Expert CUET coaching with proven results and dedicated mentorship for your success.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mentrr_learning/" 
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-mentrr-green transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/917909228688" 
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-mentrr-green transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-mentrr-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href={course.href}
                    className="text-blue-100 hover:text-mentrr-green transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-mentrr-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Call/WhatsApp</p>
                  <a 
                    href="tel:+917909228688"
                    className="text-white font-semibold hover:text-mentrr-green transition-colors"
                  >
                    +91 7909 228 688
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-mentrr-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Email</p>
                  <a 
                    href="mailto:info@mentrr.in"
                    className="text-white hover:text-mentrr-green transition-colors"
                  >
                    info@mentrr.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mentrr-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Location</p>
                  <p className="text-white">Kerala, India</p>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <button 
                onClick={() => window.open("https://wa.me/917909228688?text=Hi, I want to know more about CUET coaching", "_blank")}
                className="w-full bg-mentrr-green text-white px-4 py-3 rounded-lg font-semibold hover:bg-mentrr-green/90 transition-colors"
              >
                Join Now - WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm text-center md:text-left">
              © 2024 Mentrr Learning. All rights reserved. Kerala&apos;s #1 CUET Coaching Institute.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-mentrr-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-mentrr-green transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-mentrr-green transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;