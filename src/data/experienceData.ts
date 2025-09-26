export interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  address: string;
  description: string[];
}

export const experienceData = {
  heading: "PROFESSIONAL BACKGROUND",
  items: [
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
      position: "Construction Project Coordinator",
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
  ] as ExperienceItem[],
};
