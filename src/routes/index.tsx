import { createFileRoute } from "@tanstack/react-router";
import { navigationData } from "@/data/navigationData";
import { aboutData } from "@/data/aboutData";
import Card from "@/components/Card";
import profileImg from "../assets/imagePerson.jpg";
import whatIDoImg from "../assets/whatido.jpg";
export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  return (
    <div>
      <div className="pt-40 pb-20 text-center">
        <p className="welcome-heading text-2xl font-bold md:text-4xl lg:text-6xl">
          {aboutData.welcomeHeading}
        </p>
        <p className="my-4 text-xl md:text-2xl lg:text-4xl">{aboutData.iAmText}</p>
        <p className="my-4 text-xl md:text-2xl lg:text-4xl">{aboutData.name}</p>
      </div>
      <p className="my-4 pb-20 text-center font-bold md:text-2xl lg:text-4xl">
        {aboutData.whoAmI}
      </p>
      <div className="m-auto flex flex-col items-center justify-center gap-6 pb-20 lg:flex-row">
        <img
          className="m-3 h-75 w-75 rounded-full object-cover lg:h-100 lg:w-100"
          src={profileImg}
        />
        <div className="w-4/5 p-5 text-justify text-lg font-bold text-wrap md:text-xl lg:w-2/5 lg:text-2xl">
          {aboutData.profileDescription}
          <p className="py-4 font-normal">{aboutData.wantToKnowMore}</p>
          <p className="font-normal">{aboutData.reachMeOut}</p>
          <div className="flex py-5">
            {navigationData.footer.social.map((value) => {
              return (
                <a
                  className={`flex-none px-5`}
                  href={value.value}
                  target="_blank"
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

      <div className="m-auto flex w-4/5 flex-col flex-wrap items-stretch justify-center gap-10 p-5 md:p-7 lg:p-10 xl:flex-row">
        {aboutData.cards.map((value) => (
          <Card heading={value.key} body={value.value} className="flex-1" />
        ))}
      </div>
    </div>
  );
}
