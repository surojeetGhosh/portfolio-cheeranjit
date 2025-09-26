import { createFileRoute } from "@tanstack/react-router";
import skillsData from "@/data/skillsData.json";

export const Route = createFileRoute("/skills")({
  component: Skills,
});
export default function Skills() {
  return (
    <>
      <div className="m-auto mt-20 w-4/5 p-3 shadow">
        <p className="m-3 mb-10 text-center text-2xl font-bold tracking-widest md:text-4xl lg:text-6xl">
          {skillsData.heading}
        </p>
        <div className="m-auto text-center xl:w-3/5">
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Technical Skill
          </p>
          {skillsData.technical.map((value) => (
            <div className="m-3 inline-block rounded-2xl bg-gray-700 p-3 font-bold text-white shadow-md">
              {value}
            </div>
          ))}
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Cognitive Skills
          </p>
          <div>
            {skillsData.cognitive.map((value) => (
              <div className="m-3 inline-block rounded-2xl bg-gray-400 p-3 font-bold text-black shadow-md">
                {value}
              </div>
            ))}
          </div>
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Languages
          </p>
          <ul>
            {skillsData.languages.map((value) => (
              <li className="m-3 inline-block rounded-2xl bg-gray-100 p-3 font-bold text-black shadow-md">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="m-auto mt-20 w-4/5 p-3 shadow">
        <p className="m-3 mb-10 text-center text-2xl font-bold tracking-widest md:text-4xl lg:text-6xl">
          {skillsData.courseworkHeading}
        </p>
        <ul className="m-auto xl:w-3/5">
          {skillsData.projects.map((value) => (
            <li className="m-3 rounded-2xl p-3 font-bold">
              <p>{value.key}</p>
              <p className="font-normal">{value.value}</p>
            </li>
          ))}
          <p className="m-3 py-10 text-center text-xl font-bold tracking-widest sm:text-left md:text-2xl lg:text-4xl">
            Certificates
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2">
            {skillsData.certificates.map((value) => (
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
