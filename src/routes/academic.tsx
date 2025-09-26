import { createFileRoute } from "@tanstack/react-router";
import { academicData } from "@/data/academicData";
import conestogaLogo from "../assets/conestoga-logo.svg";
import sinhgadLogo from "../assets/sinhgad.jpeg";
import sideBar from "../assets/Wave.svg";

export const Route = createFileRoute("/academic")({
  component: Academic,
});

// Helper function to get logo based on filename
const getLogo = (logoFilename: string) => {
  switch (logoFilename) {
    case "conestoga-logo.svg":
      return conestogaLogo;
    case "sinhgad.jpeg":
      return sinhgadLogo;
    default:
      return conestogaLogo;
  }
};

function Academic() {
  return (
    <div className="relative flex gap-10">
      <img
        className="hidden min-h-600 w-3/25 overflow-hidden object-cover md:block"
        src={sideBar}
      />
      <div className="p-2 text-center text-2xl font-bold tracking-widest md:p-5 md:text-left md:text-4xl lg:text-6xl">
        <p className="mt-20 text-center md:text-left">
          {academicData.heading}
        </p>
        <div className="text-lg tracking-normal md:text-xl lg:text-2xl">
          {academicData.items.map((value) => (
            <div className="m-5 rounded-2xl bg-white p-2 shadow-xl md:p-7">
              <p className="text-lg tracking-wider md:text-xl lg:text-2xl">
                {value.degree}
              </p>
              <p className="py-3 font-normal">{value.year}</p>
              <div className="py-4">
                <img
                  src={getLogo(value.logo)}
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
