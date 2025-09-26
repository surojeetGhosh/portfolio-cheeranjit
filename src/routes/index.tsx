import { createFileRoute } from "@tanstack/react-router";
import navigationData from "@/data/navigationData.json";
import aboutData from "@/data/aboutData.json";
import Card from "@/components/Card";
import profileImg from "../assets/imagePerson.jpg";
import whatIDoImg from "../assets/whatido.jpg";
export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative py-20 md:py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="welcome-heading text-3xl font-bold md:text-5xl lg:text-7xl mb-6">
              {aboutData.welcomeHeading}
            </h1>
            <p className="text-xl md:text-3xl lg:text-5xl text-engineering-gray font-light mb-4">
              {aboutData.iAmText}
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary-800 mb-12 font-playfair">
              {aboutData.name}
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="section-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-engineering-darkGray">
            {aboutData.whoAmI}
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="profile-card rounded-3xl p-8 lg:w-1/2">
              <img
                className="w-64 h-64 rounded-full object-cover mx-auto mb-8 shadow-engineering animate-float"
                src={profileImg}
                alt="Profile"
              />
              <div className="text-center">
                <p className="text-lg md:text-xl text-engineering-darkGray leading-relaxed mb-6">
                  {aboutData.profileDescription}
                </p>
                <p className="text-engineering-gray mb-2">{aboutData.wantToKnowMore}</p>
                <p className="text-engineering-gray mb-8">{aboutData.reachMeOut}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                  {navigationData.footer.social.map((value, index) => (
                    <a
                      key={index}
                      href={value.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-full bg-primary-50 hover:bg-primary-100 transition-all duration-300 hover:scale-110"
                    >
                      <div
                        className={`icon-${value.type} w-6 h-6 group-hover:scale-110 transition-transform duration-300`}
                      ></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img
                src={whatIDoImg}
                className="w-full max-w-md mx-auto rounded-2xl shadow-engineering animate-float"
                alt="What I Do"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.cards.map((value, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card 
                  heading={value.key} 
                  body={value.value} 
                  className="h-full"
                  headingColor="bg-gradient-to-br from-primary-600 to-primary-800 text-white"
                  bodyColor="bg-white text-engineering-darkGray"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
