import { createFileRoute } from "@tanstack/react-router";
import skillsData from "@/data/skillsData.json";

export const Route = createFileRoute("/skills")({
  component: Skills,
});
export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-darkGray mb-8">
            {skillsData.heading}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="engineering-card rounded-3xl p-8 md:p-12 mb-16">
            {/* Technical Skills */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center font-playfair">
                Technical Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.technical.map((skill, index) => (
                  <div key={index} className="skill-badge px-6 py-3 rounded-full text-white font-medium text-sm md:text-base shadow-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Cognitive Skills */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center font-playfair">
                Cognitive Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.cognitive.map((skill, index) => (
                  <div key={index} className="bg-accent-100 text-accent-800 px-6 py-3 rounded-full font-medium text-sm md:text-base shadow-lg hover:bg-accent-200 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center font-playfair">
                Languages
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {skillsData.languages.map((language, index) => (
                  <div key={index} className="bg-primary-100 text-primary-800 px-6 py-3 rounded-full font-medium text-sm md:text-base shadow-lg hover:bg-primary-200 transition-colors duration-300">
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Certificates Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-darkGray mb-8">
              {skillsData.courseworkHeading}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
          </div>

          {/* Projects */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center font-playfair">
              Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.projects.map((project, index) => (
                <div key={index} className="engineering-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold text-primary-800 mb-3 font-playfair">
                    {project.key}
                  </h3>
                  <p className="text-engineering-darkGray leading-relaxed text-sm">
                    {project.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-8 text-center font-playfair">
              Certifications & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.certificates.map((certificate, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-card hover:shadow-engineering transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full flex-shrink-0"></div>
                    <p className="text-engineering-darkGray font-medium text-sm">
                      {certificate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
