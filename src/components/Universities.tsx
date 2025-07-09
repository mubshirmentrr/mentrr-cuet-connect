import { useState } from "react";
import { MapPin, GraduationCap, BookOpen, Users, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Universities = () => {
  const [selectedState, setSelectedState] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const centralUniversities = [
    {
      name: "Delhi University",
      location: "New Delhi",
      state: "Delhi",
      established: 1922,
      courses: ["BA (Hons)", "BSc (Hons)", "BCom (Hons)", "MA", "MSc", "MCom", "PhD"],
      specializations: ["Liberal Arts", "Sciences", "Commerce", "Social Sciences"],
      ranking: "#2 in India",
      students: "132,000+",
      image: "🏛️"
    },
    {
      name: "Jawaharlal Nehru University",
      location: "New Delhi", 
      state: "Delhi",
      established: 1969,
      courses: ["BA", "MA", "MSc", "MPhil", "PhD"],
      specializations: ["International Studies", "Social Sciences", "Languages", "Sciences"],
      ranking: "#3 in India",
      students: "8,500+",
      image: "🎓"
    },
    {
      name: "Jamia Millia Islamia",
      location: "New Delhi",
      state: "Delhi", 
      established: 1920,
      courses: ["BA", "BSc", "BTech", "MA", "MSc", "MTech", "PhD"],
      specializations: ["Engineering", "Humanities", "Social Sciences", "Mass Communication"],
      ranking: "#4 in India",
      students: "15,000+",
      image: "🕌"
    },
    {
      name: "Banaras Hindu University",
      location: "Varanasi",
      state: "Uttar Pradesh",
      established: 1916,
      courses: ["BA", "BSc", "BTech", "MBBS", "MA", "MSc", "PhD"],
      specializations: ["Engineering", "Medicine", "Arts", "Sciences", "Management"],
      ranking: "#5 in India", 
      students: "30,000+",
      image: "🏛️"
    },
    {
      name: "Aligarh Muslim University",
      location: "Aligarh",
      state: "Uttar Pradesh",
      established: 1875,
      courses: ["BA", "BSc", "BTech", "MBBS", "MA", "MSc", "PhD"],
      specializations: ["Engineering", "Medicine", "Law", "Management", "Arts"],
      ranking: "#6 in India",
      students: "28,000+", 
      image: "🕌"
    },
    {
      name: "Pondicherry University",
      location: "Puducherry",
      state: "Puducherry",
      established: 1985,
      courses: ["BA", "BSc", "BTech", "MA", "MSc", "MTech", "PhD"],
      specializations: ["Engineering", "Management", "Sciences", "Humanities"],
      ranking: "#15 in India",
      students: "9,000+",
      image: "🌴"
    },
    {
      name: "University of Hyderabad",
      location: "Hyderabad", 
      state: "Telangana",
      established: 1974,
      courses: ["BA", "BSc", "MA", "MSc", "MPhil", "PhD"],
      specializations: ["Sciences", "Social Sciences", "Humanities", "Management"],
      ranking: "#12 in India",
      students: "5,000+",
      image: "🏛️"
    },
    {
      name: "Tezpur University",
      location: "Tezpur",
      state: "Assam", 
      established: 1994,
      courses: ["BA", "BSc", "BTech", "MA", "MSc", "PhD"],
      specializations: ["Engineering", "Sciences", "Management", "Humanities"],
      ranking: "#25 in India",
      students: "3,500+",
      image: "🌿"
    },
    {
      name: "Manipur University",
      location: "Imphal",
      state: "Manipur",
      established: 1980,
      courses: ["BA", "BSc", "BCom", "MA", "MSc", "PhD"],
      specializations: ["Arts", "Sciences", "Commerce", "Social Work"],
      ranking: "#35 in India",
      students: "25,000+",
      image: "⛰️"
    },
    {
      name: "Mizoram University",
      location: "Aizawl",
      state: "Mizoram",
      established: 2001,
      courses: ["BA", "BSc", "BCom", "MA", "MSc", "PhD"],
      specializations: ["Liberal Arts", "Sciences", "Management", "Education"],
      ranking: "#40 in India", 
      students: "7,000+",
      image: "🏔️"
    },
    {
      name: "Nagaland University",
      location: "Kohima",
      state: "Nagaland",
      established: 1994,
      courses: ["BA", "BSc", "BCom", "MA", "MSc", "PhD"],
      specializations: ["Arts", "Sciences", "Commerce", "Education"],
      ranking: "#42 in India",
      students: "12,000+", 
      image: "🌲"
    },
    {
      name: "Tripura University",
      location: "Agartala",
      state: "Tripura",
      established: 1987,
      courses: ["BA", "BSc", "BCom", "MA", "MSc", "PhD"],
      specializations: ["Arts", "Sciences", "Commerce", "Management"],
      ranking: "#38 in India",
      students: "75,000+",
      image: "🌺"
    },
    {
      name: "Sikkim University",
      location: "Gangtok",
      state: "Sikkim",
      established: 2007,
      courses: ["BA", "BSc", "BTech", "MA", "MSc", "PhD"],
      specializations: ["Technology", "Sciences", "Buddhism Studies", "Management"],
      ranking: "#45 in India",
      students: "3,000+",
      image: "🏔️"
    },
    {
      name: "Hemvati Nandan Bahuguna Garhwal University",
      location: "Srinagar",
      state: "Uttarakhand", 
      established: 1973,
      courses: ["BA", "BSc", "BCom", "MA", "MSc", "PhD"],
      specializations: ["Arts", "Sciences", "Commerce", "Rural Technology"],
      ranking: "#30 in India",
      students: "50,000+",
      image: "⛰️"
    },
    {
      name: "Rajiv Gandhi University",
      location: "Rono Hills",
      state: "Arunachal Pradesh",
      established: 1985,
      courses: ["BA", "BSc", "BCom", "MA", "MSc", "PhD"],
      specializations: ["Arts", "Sciences", "Management", "Law"],
      ranking: "#50 in India",
      students: "8,000+",
      image: "🌲"
    }
  ];

  const states = ["All", ...new Set(centralUniversities.map(uni => uni.state))];

  const filteredUniversities = centralUniversities.filter(uni => {
    const matchesState = selectedState === "All" || uni.state === selectedState;
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesState && matchesSearch;
  });

  const handleWhatsAppClick = (universityName: string) => {
    const message = `Hi, I'm interested in admission guidance for ${universityName}. Please provide more details about CUET preparation.`;
    window.open(`https://wa.me/917909228688?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="universities" className="py-20 bg-gradient-to-br from-gray-50 to-mentrr-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mentrr-navy/10 text-mentrr-navy rounded-full text-sm font-medium mb-4">
            🏛️ Central Universities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mentrr-navy mb-6">
            Top <span className="text-mentrr-green">Central Universities</span> in India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore admission opportunities in India&apos;s premier central universities. Our CUET coaching helps you secure seats in these prestigious institutions.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search universities, locations, or specializations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* State Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select 
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mentrr-green/20 focus:border-mentrr-green transition-colors appearance-none bg-white min-w-[200px]"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              {/* University Header */}
              <div className="bg-gradient-to-r from-mentrr-navy to-blue-800 p-6 text-white">
                <div className="text-4xl mb-3">{university.image}</div>
                <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                <div className="flex items-center text-blue-100 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{university.location}, {university.state}</span>
                </div>
              </div>

              {/* University Details */}
              <div className="p-6 space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-mentrr-green">{university.ranking}</div>
                    <div className="text-xs text-gray-500">NIRF Ranking</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-mentrr-orange">{university.students}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>

                {/* Established */}
                <div className="text-center py-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Established: </span>
                  <span className="font-semibold text-mentrr-navy">{university.established}</span>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="font-semibold text-mentrr-navy mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Popular Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {university.specializations.slice(0, 3).map((spec, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-mentrr-green/10 text-mentrr-green rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                    {university.specializations.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{university.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Courses */}
                <div>
                  <h4 className="font-semibold text-mentrr-navy mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Available Courses
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {university.courses.slice(0, 4).map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {course}
                      </span>
                    ))}
                    {university.courses.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{university.courses.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="mentrr" 
                  className="w-full mt-4"
                  onClick={() => handleWhatsAppClick(university.name)}
                >
                  Get Admission Guidance
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-mentrr-navy to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Secure Your Seat in Top Universities</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              With our comprehensive CUET coaching, you&apos;ll be well-prepared to crack the entrance exams and secure admission in your dream central university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="mentrr" 
                size="lg"
                onClick={() => window.open("https://wa.me/917909228688?text=Hi, I want to know more about CUET coaching for central university admissions", "_blank")}
              >
                Start CUET Preparation
              </Button>
              <Button 
                variant="mentrr-outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-mentrr-navy"
              >
                Download Admission Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No universities found</div>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Universities;