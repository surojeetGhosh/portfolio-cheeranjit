import { createFileRoute } from "@tanstack/react-router";
import experienceData from "@/data/experienceData.json";
import workImg from "../assets/work.jpg";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-darkGray mb-8">
            {experienceData.heading}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full mb-8"></div>
          <div className="max-w-md mx-auto">
            <img
              className="w-full h-auto rounded-2xl shadow-engineering animate-float"
              src={workImg}
              alt="Professional Experience"
            />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="experience-timeline">
            {experienceData.items.map((item, index) => (
              <div key={index} className="timeline-item animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="engineering-card rounded-3xl p-8 md:p-10 mx-4 lg:mx-0">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Timeline Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2 font-playfair">
                            {item.position}
                          </h3>
                          <p className="text-accent-600 font-semibold text-lg mb-2">{item.year}</p>
                          <div className="text-engineering-gray">
                            <p className="font-medium text-lg">{item.company}</p>
                            <p className="text-sm">{item.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-engineering-darkGray border-b border-gray-200 pb-2">
                          Key Responsibilities & Achievements
                        </h4>
                        <ul className="space-y-3">
                          {item.description.map((desc, descIndex) => (
                            <li key={descIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
