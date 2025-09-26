import { createFileRoute } from "@tanstack/react-router";
import navigationData from "@/data/navigationData.json";
import aboutData from "@/data/aboutData.json";
import profileImg from "../assets/imagePerson.jpg";
import { useState } from "react";
export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLink(type);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getDisplayText = (value: string, type: string) => {
    switch (type) {
      case 'phone':
        return value.replace('tel:', '');
      case 'email':
        return value.replace('mailto:', '');
      case 'discord':
        return 'Discord Profile';
      case 'linkedin':
        return 'LinkedIn Profile';
      default:
        return value;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Professional Header */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium tracking-wide">CERTIFIED PROJECT COORDINATOR</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 font-playfair">
              {aboutData.name}
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-32"></div>
              <p className="text-xl md:text-2xl text-blue-200 font-light">
                Civil Engineer & Project Manager
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-32"></div>
            </div>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Delivering excellence in construction project management with proven expertise in residential development, 
              site coordination, and stakeholder management.
            </p>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
      </div>
      </section>

      {/* Professional About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-50 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-50 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-darkGray mb-6">
              {aboutData.whoAmI}
            </h2>
            <p className="text-xl text-engineering-gray max-w-3xl mx-auto leading-relaxed">
              A dedicated professional with a unique blend of technical engineering expertise and project management excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Profile Section */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-engineering">
                <div className="relative mb-8">
                  <img
                    className="w-80 h-80 rounded-2xl object-cover mx-auto shadow-lg"
          src={profileImg}
                    alt="Professional Profile"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-800 mb-4 font-playfair">
                    {aboutData.name}
                  </h3>
                  <p className="text-engineering-gray mb-6 leading-relaxed">
                    {aboutData.profileDescription}
                  </p>
                  
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {navigationData.footer.social.map((value, index) => (
                      <div key={index} className="relative group">
                        <a
                          href={value.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-3 rounded-full bg-primary-50 hover:bg-primary-100 transition-all duration-300 hover:scale-110"
                          title={getDisplayText(value.value, value.type)}
                        >
                          <div
                            className={`icon-${value.type} w-6 h-6 group-hover:scale-110 transition-transform duration-300`}
                          ></div>
                        </a>
                        <button
                          onClick={() => copyToClipboard(getDisplayText(value.value, value.type), value.type)}
                          className="p-1 bg-black rounded-full bg-accent-500 hover:bg-accent-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                          title="Copy to Clipboard"
                        >
                          {copiedLink === value.type ? (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                        {copiedLink === value.type && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional Highlights */}
            <div className="space-y-8">
              <div className="engineering-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-800 mb-2">Construction Management</h4>
                    <p className="text-engineering-darkGray leading-relaxed">
                      Expert in overseeing residential construction projects from planning to completion, 
                      ensuring quality, safety, and timely delivery.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="engineering-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-800 mb-2">Project Coordination</h4>
                    <p className="text-engineering-darkGray leading-relaxed">
                      Certified Project Coordinator with PMAC certification, skilled in stakeholder management, 
                      scheduling, and resource optimization.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="engineering-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-800 mb-2">Technical Excellence</h4>
                    <p className="text-engineering-darkGray leading-relaxed">
                      Proficient in AutoCAD, MS Project, Primavera P6, and construction management software 
                      for precise project execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Expertise Cards */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
      </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-engineering-darkGray mb-6 font-playfair">
              Core Competencies
            </h2>
            <p className="text-xl text-engineering-gray max-w-3xl mx-auto">
              Comprehensive expertise across all aspects of civil engineering and project management
            </p>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.cards.map((value, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="engineering-card h-full group">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-primary-800 font-playfair">
                        {value.key}
                      </h3>
                    </div>
                    <p className="text-engineering-darkGray leading-relaxed flex-grow">
                      {value.value}
                    </p>
                  </div>
                </div>
              </div>
        ))}
      </div>
        </div>
      </section>
    </div>
  );
}
