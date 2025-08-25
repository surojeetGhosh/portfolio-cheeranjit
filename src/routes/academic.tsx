import { createFileRoute } from "@tanstack/react-router";
import conestogaLogo from "../assets/conestoga-logo.svg";
import sinhgadLogo from "../assets/sinhgad.jpeg";
import sideBar from "../assets/Wave.svg";

export const Route = createFileRoute("/academic")({
  component: Academic,
});

const academic = [
  {
    year: "2023-2024",
    degree: "Administrative Business Management",
    logo: conestogaLogo,
    college: "Conestoga College",
    address: "Brantford, Ontario, Canada",
    description: [
      "Developed strong time management and organizational skills to enhance office and business operations efficiency.",
      "Mastered effective communication techniques for creating, editing, and delivering professional materials across diverse platforms.",
      "Acquired valuable knowledge in human resource management to contribute to achieving organizational goals and strategic initiatives.",
      "Leveraged advanced technological tools for communication, market analysis, collaboration, information management, data analytics, database management, and decision support to maximize administrative productivity.",
    ],
  },
  {
    year: "2023-2023",
    degree: "Project Management",
    logo: conestogaLogo,
    college: "Conestoga College",
    address: "Brantford, Ontario, Canada",
    description: [
      "Demonstrated proficiency in managing project scope, cost, schedule, and quality to meet and exceed stakeholder expectations.",
      "Skilled in aligning projects with organizational strategic plans and justifying business needs effectively.",
      "Experienced in defining project goals, constraints, deliverables, and resource requirements through active stakeholder consultation.",
      "Acquired comprehensive knowledge of PMI project management methodologies, processes, lifecycle phases, and tools.",
      "Adaptable and resourceful in executing project strategies, applying problem-solving skills and leading teamwork to overcome challenges and achieve success.",
    ],
  },
  {
    year: "2015-2021",
    degree: "Bachelor of Engineering Civil Engineer",
    logo: sinhgadLogo,
    college: "Sinhagad Academy of Engineering, Pune university",
    address: "Pune, Maharastra, India",
    description: [
      "Possess a deep understanding of structural analysis, construction materials, geotechnical engineering, transportation systems, and water resource management.",
      "Skilled in analyzing and resolving complex engineering challenges through critical thinking and innovative problem-solving.",
      "Experienced in project planning, scheduling, budgeting, and resource management to ensure successful and timely project completion.",
      "Knowledgeable in sustainable design principles and environmental regulations aimed at minimizing project impact.",
      "Proficient in AutoCAD software for precise design, drafting, and technical documentation.",
    ],
  },
];

function Academic() {
  return (
    <div className="relative flex gap-10">
      <img
        className="hidden min-h-600 w-3/25 overflow-hidden object-cover md:block"
        src={sideBar}
      />
      <div className="p-2 text-center text-2xl font-bold tracking-widest md:p-5 md:text-left md:text-4xl lg:text-6xl">
        <p className="mt-20 text-center md:text-left">
          EDUCATION ACCOMPLISHMENTS
        </p>
        <div className="text-lg tracking-normal md:text-xl lg:text-2xl">
          {academic.map((value) => (
            <div className="m-5 rounded-2xl bg-white p-2 shadow-xl md:p-7">
              <p className="text-lg tracking-wider md:text-xl lg:text-2xl">
                {value.degree}
              </p>
              <p className="py-3 font-normal">{value.year}</p>
              <div className="py-4">
                <img
                  src={value.logo}
                  className="mr-5 inline h-30 w-30 rounded-2xl bg-black object-contain"
                />
                <div className="inline-block">
                  <p>{value.college}</p>
                  <p>{value.address}</p>
                </div>
              </div>
              <ul className="p-5 text-white">
                {value.description.map((value) => (
                  <li className="my-3 rounded-2xl bg-gray-600 p-3">{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
