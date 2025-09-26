import { createFileRoute } from "@tanstack/react-router";
import { experienceData } from "@/data/experienceData";
import workImg from "../assets/work.jpg";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

function Experience() {
  return (
    <div>
      <div className="p-2 text-center text-2xl font-bold tracking-widest md:p-5 md:text-left md:text-4xl lg:text-6xl">
        <p className="mt-20 text-center">{experienceData.heading}</p>
        <img
          className="m-auto h-50 w-50 object-contain md:h-100 md:w-100"
          src={workImg}
        />
        <div className="text-lg tracking-normal md:text-xl lg:text-2xl xl:m-auto xl:max-w-4/5">
          {experienceData.items.map((value) => (
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
