import { createFileRoute } from "@tanstack/react-router";
import resource from "@assets/resource.json";
import Card from "@/components/Card";

const dataAbout = [
    {
        key: "Professional Background",
        value: "I hold a Bachelor’s degree in Civil Engineering and Graduate Certificates in Project Management and Administrative Business Management. I am certified as a Project Coordinator by the Project Management Association of Canada.",
    },
    {
        key: "Experience and Skills",
        value: "With hands-on construction experience as a Project Engineer Intern and Junior Site Engineer, I support residential projects through site coordination, scheduling, documentation, and contractor supervision. I have strong organizational and interpersonal skills developed through prior roles, including inventory management and staff training as a Bakery Clerk.",
    },
    {
        key: "Technical Proficiency and Certifications",
        value: "I am proficient in Microsoft Office, AutoCAD, MS Project, Tableau, JIRA, Monday.com, and have working knowledge of Primavera P6. My certifications in AutoCAD, WHMIS, Six Sigma White Belt, Procore, and First Aid & CPR enable me to contribute effectively to project delivery and team success.",
    },
];
export const Route = createFileRoute("/")({
    component: About,
});

function About() {
    return (
        <div>
            <div className="pt-40 pb-20 text-center">
                <p className="font-bold welcome-heading text-2xl md:text-4xl lg:text-6xl">
                    WELCOME TO MY PORTFOLIO!
                </p>
                <p className="text-xl md:text-2xl lg:text-4xl my-4">I AM</p>
                <p className="text-xl md:text-2xl lg:text-4xl my-4">
                    CHEERANJIT GHOSH
                </p>
            </div>
            <p className="font-bold pb-20 text-center md:text-2xl lg:text-4xl my-4">
                WHO AM I?
            </p>
            <div className="flex flex-col lg:flex-row m-auto justify-center items-center gap-6 pb-20">
                <img
                    className="h-75 w-75 lg:h-100 lg:w-100 rounded-full m-3 object-cover"
                    src="./src/assets/imagePerson.jpg"
                />
                <div className="text-justify text-wrap p-5 font-bold w-4/5 lg:w-2/5 text-lg md:text-xl lg:text-2xl">
                    I am a Certified Project Coordinator and Civil Engineer
                    passionate about delivering quality project solutions and
                    continuous growth.
                    <p className="py-4 font-normal">Want to Know more?</p>
                    <p className="font-normal">Reach me out!!</p>
                    <div className="flex py-5">
                        {resource.footer.social.map((value) => {
                            return (
                                <a
                                    className={`flex-none px-5`}
                                    href={value.value}
                                    target="__blank"
                                >
                                    <div
                                        className={`icon-${value.type} m-auto w-6 h-6 md:w-10 md:h-10`}
                                    ></div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="my-4">
                <img
                    src="./src/assets/whatido.jpg"
                    className="h-35 w-35 lg:h-50 lg:w-50 rounded-full object-cover mx-auto"
                />
            </div>

            <div className="flex flex-col xl:flex-row m-auto justify-center gap-10 p-5 md:p-7 lg:p-10 w-4/5 flex-wrap">
                {dataAbout.map((value) => (
                    <Card
                        heading={value.key}
                        body={value.value}
                        className="flex-1"
                    />
                ))}
            </div>
        </div>
    );
}
