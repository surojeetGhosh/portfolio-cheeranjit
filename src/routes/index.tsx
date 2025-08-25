import { createFileRoute } from "@tanstack/react-router";
import resource from "@assets/resource.json";
import Card from "@/components/Card";
import profileImg from "../assets/imagePerson.jpg";
import whatIDoImg from "../assets/whatido.jpg";

const dataAbout = [
  {
    key: "Professional Background",
    value:
      "I hold a Bachelor’s degree in Civil Engineering and Graduate Certificates in Project Management and Administrative Business Management. I am certified as a Project Coordinator by the Project Management Association of Canada.",
  },
  {
    key: "Experience and Skills",
    value:
      "With hands-on construction experience as a Project Engineer Intern and Junior Site Engineer, I support residential projects through site coordination, scheduling, documentation, and contractor supervision. I have strong organizational and interpersonal skills developed through prior roles, including inventory management and staff training as a Bakery Clerk.",
  },
  {
    key: "Technical Proficiency and Certifications",
    value:
      "I am proficient in Microsoft Office, AutoCAD, MS Project, Tableau, JIRA, Monday.com, and have working knowledge of Primavera P6. My certifications in AutoCAD, WHMIS, Six Sigma White Belt, Procore, and First Aid & CPR enable me to contribute effectively to project delivery and team success.",
  },
];
export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  return (
    <div>
      <div className="pt-40 pb-20 text-center">
        <p className="welcome-heading text-2xl font-bold md:text-4xl lg:text-6xl">
          WELCOME TO MY PORTFOLIO!
        </p>
        <p className="my-4 text-xl md:text-2xl lg:text-4xl">I AM</p>
        <p className="my-4 text-xl md:text-2xl lg:text-4xl">CHEERANJIT GHOSH</p>
      </div>
      <p className="my-4 pb-20 text-center font-bold md:text-2xl lg:text-4xl">
        WHO AM I?
      </p>
      <div className="m-auto flex flex-col items-center justify-center gap-6 pb-20 lg:flex-row">
        <img
          className="m-3 h-75 w-75 rounded-full object-cover lg:h-100 lg:w-100"
          src={profileImg}
        />
        <div className="w-4/5 p-5 text-justify text-lg font-bold text-wrap md:text-xl lg:w-2/5 lg:text-2xl">
          I am a Certified Project Coordinator and Civil Engineer passionate
          about delivering quality project solutions and continuous growth.
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
                    className={`icon-${value.type} m-auto h-6 w-6 md:h-10 md:w-10`}
                  ></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-4">
        <img
          src={whatIDoImg}
          className="mx-auto h-35 w-35 rounded-full object-cover lg:h-50 lg:w-50"
        />
      </div>

      <div className="m-auto flex w-4/5 flex-col flex-wrap justify-center gap-10 p-5 md:p-7 lg:p-10 xl:flex-row">
        {dataAbout.map((value) => (
          <Card heading={value.key} body={value.value} className="flex-1" />
        ))}
      </div>
    </div>
  );
}
