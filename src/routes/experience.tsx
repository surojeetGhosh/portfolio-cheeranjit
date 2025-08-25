import { createFileRoute } from "@tanstack/react-router";
import workImg from "../assets/work.jpg";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

const experience = [
  {
    year: "01/2021-04/2021",
    position: "Project Engineer Intern",
    company: "Santosh Builders and Contractors",
    address: "Pune, Maharashtra, India",
    description: [
      "Assisted in preparing inspection reports, site documentation, and material submittals for ongoing residential projects.",
      "Documented meeting minutes and followed up on action items across teams.",
      "Shadowed project engineers and supported daily administrative coordination.",
      "Helped track procurement schedules and maintained site-level logs for material and labor.",
      "Gained practical exposure to site supervision, compliance tracking, and construction sequencing.",
    ],
  },
  {
    year: "07/2021-11/2022",
    position: "Junior Site Engineer",
    company: "Santosh Builders and Contractors",
    address: "Pune, Maharashtra, India",
    description: [
      "Oversaw two residential construction projects during 2021-2022, supporting all phases from excavation to finishing.",
      "Reviewed architectural and structural drawings and coordinated with consultants to resolve discrepancies on-site.",
      "Supervised subcontractors and labor teams to ensure quality, safety, and adherence to project schedules.",
      "Prepared RFIs, daily progress reports, and site documentation in coordination with project managers.",
      "Assisted with quantity takeoffs, material tracking, and subcontractor billing using Excel and site logs",
      "Coordinated site inspections and addressed compliance issues with municipal standards and health and safety protocols.",
      "Used Primavera P6 and Microsoft Office (Excel, Word, PowerPoint) to support reporting, schedule updates, and workflow optimization.",
    ],
  },
  {
    year: "2023 - Present",
    position: "Bakery Clerk",
    company: "Metro",
    address: "Brantford, Ontario, Canada",
    description: [
      "Assisted in maintaining stock levels, managing inventory rotation, and placing restock orders with accuracy.",
      "Trained new staff on bakery procedures, equipment use, and workplace safety standards.",
      "Provided excellent customer service by answering inquiries and assisting with custom product requests.",
      "Collaborated with team members to meet daily production goals and maintain store cleanliness.",
      "Demonstrated time management, reliability, and communication skills during fast-paced shifts.",
    ],
  },
];

function Experience() {
  return (
    <div>
      <div className="p-2 text-center text-2xl font-bold tracking-widest md:p-5 md:text-left md:text-4xl lg:text-6xl">
        <p className="mt-20 text-center">PROFESSIONAL BACKGROUND</p>
        <img
          className="m-auto h-50 w-50 object-contain md:h-100 md:w-100"
          src={workImg}
        />
        <div className="text-lg tracking-normal md:text-xl lg:text-2xl xl:m-auto xl:max-w-4/5">
          {experience.map((value) => (
            <div className="m-5 flex flex-col items-center justify-center rounded-2xl bg-white p-2 shadow-xl md:p-3 lg:flex-row">
              <div className="text-center lg:text-left">
                <p className="max-w-100 py-4 text-lg tracking-wider text-blue-700 md:text-xl lg:text-2xl">
                  {value.year}
                </p>
                <p className="pb-5">{value.position}</p>
                <div className="inline-block">
                  <p>{value.company}</p>
                  <p>{value.address}</p>
                </div>
              </div>
              <ul className="max-w-300 border-4 border-solid border-t-amber-600 font-normal text-white lg:border-none xl:ml-10">
                {value.description.map((value, idx) => (
                  <li
                    className={`${idx % 2 ? "bg-amber-100 md:float-left md:clear-right" : "bg-blue-100 md:float-right md:clear-left"} my-3 block rounded-2xl p-3 text-black shadow md:w-3/5`}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
