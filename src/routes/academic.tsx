import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/academic")({
    component: Academic,
});

const academic = [
    {
        year: "2023-2024",
        degree: "Administrative Business Management",
        logo: "/src/assets/conestoga-logo.svg",
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
        logo: "/src/assets/conestoga-logo.svg",
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
        logo: "/src/assets/sinhgad.jpeg",
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
        <div className="flex gap-10">
            <img
                className="hidden md:block w-3/25 sidebar h-screen object-cover"
                src="/src/assets/pencils.jpg"
            />
            <div className="p-2 md:p-5 font-bold tracking-widest text-center md:text-left text-2xl md:text-4xl lg:text-6xl">
                <p className='text-center md:text-left mt-20'>EDUCATION ACCOMPLISHMENTS</p>
                <div className="text-lg md:text-xl lg:text-2xl tracking-normal">
                    {academic.map((value) => (
                        <div className="bg-white p-2 md:p-7 m-5 rounded-2xl shadow-xl">
                            <p className="text-lg md:text-xl lg:text-2xl tracking-wider">
                                {value.degree}
                            </p>
                            <p className="font-normal py-3">{value.year}</p>
                            <div className="py-4">
                                <img
                                    src={value.logo}
                                    className="inline h-30 w-30 mr-5 bg-black object-contain rounded-2xl"
                                />
                                <div className="inline-block">
                                    <p>{value.college}</p>
                                    <p>{value.address}</p>
                                </div>
                            </div>
                            <ul className="text-white p-5">
                                {value.description.map((value) => (
                                    <li className="bg-amber-700 my-3 p-3 rounded-2xl">{value}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
