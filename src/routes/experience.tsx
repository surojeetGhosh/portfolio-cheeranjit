import { createFileRoute } from "@tanstack/react-router";

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
            <div className="p-2 md:p-5 font-bold tracking-widest text-center md:text-left text-2xl md:text-4xl lg:text-6xl">
                <p className="text-center mt-20">PROFESSIONAL BACKGROUND</p>
                <img
                    className="w-50 h-50 md:h-100 md:w-100 object-contain m-auto"
                    src="./src/assets/work.jpg"
                />
                <div className="text-lg md:text-xl lg:text-2xl tracking-normal xl:max-w-4/5 xl:m-auto">
                    {experience.map((value) => (
                        <div className="flex flex-col lg:flex-row bg-white p-2 md:p-3 m-5 rounded-2xl shadow-xl justify-center items-center">
                            <div className="text-center lg:text-left">
                                <p className="text-blue-700 text-lg md:text-xl lg:text-2xl tracking-wider py-4 max-w-100">
                                    {value.year}
                                </p>
                                <p className="pb-5">
                                  {value.position}
                                </p>
                                <div className="inline-block">
                                    <p>{value.company}</p>
                                    <p>{value.address}</p>
                                </div>
                            </div>
                            <ul className="text-white xl:ml-10 max-w-300 border-t-amber-600 lg:border-none border-solid border-4 font-normal">
                                {value.description.map((value) => (
                                    <li className="shadow text-black my-3 p-3 rounded-2xl">
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
