import { createFileRoute } from "@tanstack/react-router";
import academicData from "@/data/academicData.json";
import conestogaLogo from "../assets/conestoga-logo.svg";
import sinhgadLogo from "../assets/sinhgad.jpeg";
import sideBar from "../assets/Wave.svg";

export const Route = createFileRoute("/academic")({
  component: Academic,
});

// Helper function to get logo based on filename
const getLogo = (logoFilename: string) => {
  switch (logoFilename) {
    case "conestoga-logo.svg":
      return conestogaLogo;
    case "sinhgad.jpeg":
      return sinhgadLogo;
    default:
      return conestogaLogo;
  }
};

function Academic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-darkGray mb-8">
            {academicData.heading}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {academicData.items.map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="engineering-card rounded-3xl p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Logo and Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="flex mb-4">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-2xl shadow-lg">
                          <img
                            src={getLogo(item.logo)}
                            className="w-20 h-20 object-contain"
                            alt="Institution Logo"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary-800 mb-2 font-playfair">
                          {item.degree}
                        </h3>
                        <p className="text-accent-600 font-semibold mb-2">{item.year}</p>
                        <p className="text-engineering-gray font-medium">{item.college}</p>
                        <p className="text-engineering-gray text-sm">{item.address}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-engineering-darkGray mb-4 border-b border-gray-200 pb-2">
                        Key Achievements & Learning
                      </h4>
                      <ul className="space-y-3">
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                            <p className="text-engineering-darkGray leading-relaxed text-sm md:text-base">
                              {desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <img
          className="w-full h-full object-cover"
          src={sideBar}
          alt="Background Pattern"
        />
      </div>
    </div>
  );
}
