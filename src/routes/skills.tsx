import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: Skills,
});

const skills = {
  technical: [
    "MS Office 360",
    "MS Access",
    "MS Project",
    "JIRA",
    "Tableau",
    "Auto Cad",
    "Construction Management",
    "Project Management",
    "MS Excel",
    "MS Word",
  ],
  cognitive: [
    "Time Management",
    "Adaptability",
    "Communication skills",
    "Calendar management",
    "Analytical Skills",
    "Stakeholders Management",
  ],
  Languages: ["English (Fluent)", "Hindi (Native)", "Bangla (Native)"],
  project: [
    {
      key: "Final Year Project (Award-Winning)",
      value:
        "Developed a comprehensive plan for a sustainable urban infrastructure project by making “Tiles using plastic waste” incorporating green building practices and advanced project management techniques.",
    },
    {
      key: "Administrative Business Management Project",
      value:
        "Designed and implemented a streamlined administrative process for a mock organization named “Lakeside crust & Brew” by solving problem and enhancing operational efficiency with continuous improvement and also created portfolio website as the final project.",
    },
    {
      key: "Project Management Simulation",
      value:
        "Led a team in a project management simulation, successfully navigating through project lifecycle phases, managing risks, and delivering the project within scope and budget.",
    },
  ],
  certificate: [
    "Best Final year project award (2021)",
    "UDEMY AUTO CAD Certificate (2022)",
    "Managing Globally course by LinkedIn learning (2024)",
    "Six Sigma- White Belt (2024)",
    "Certified Project Coordinator |PMAC|",
    "WHMIS",
    "PROCORE for construction management",
    "CPR",
  ],
};
export default function Skills() {
  return (
    <>
      <div className="m-auto mt-20 w-4/5 p-3 shadow">
        <p className="m-3 mb-10 text-center text-2xl font-bold tracking-widest md:text-4xl lg:text-6xl">
          Skills
        </p>
        <div className="m-auto text-center xl:w-3/5">
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Technical Skill
          </p>
          {skills.technical.map((value) => (
            <div className="m-3 inline-block rounded-2xl bg-gray-700 p-3 font-bold text-white shadow-md">
              {value}
            </div>
          ))}
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Cognitive Skills
          </p>
          <div>
            {skills.cognitive.map((value) => (
              <div className="m-3 inline-block rounded-2xl bg-gray-400 p-3 font-bold text-black shadow-md">
                {value}
              </div>
            ))}
          </div>
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Languages
          </p>
          <ul>
            {skills.Languages.map((value) => (
              <li className="m-3 inline-block rounded-2xl bg-gray-100 p-3 font-bold text-black shadow-md">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="m-auto mt-20 w-4/5 p-3 shadow">
        <p className="m-3 mb-10 text-center text-2xl font-bold tracking-widest md:text-4xl lg:text-6xl">
          RELEVANT COURSEWORK & PROJECTS
        </p>
        <ul className="m-auto xl:w-3/5">
          {skills.project.map((value) => (
            <li className="m-3 rounded-2xl p-3 font-bold">
              <p>{value.key}</p>
              <p className="font-normal">{value.value}</p>
            </li>
          ))}
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Certificates
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2">
            {skills.certificate.map((value) => (
              <li className="m-3 inline-block rounded-2xl bg-gray-100 p-3 font-bold text-black shadow-md">
                {value}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
}
