import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex w-3/5 text-center tracking-widest font-bold py-3 items-center-safe font-roboto mx-auto box-border cursor-default">
        <Link
          to="/"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          ABOUT
        </Link>
        <Link
          to="/academic"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          ACADEMIC
        </Link>
        <Link
          to="/experience"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          EXPERIENCE
        </Link>
        <Link
          to="/skills"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          SKILLS
        </Link>
      </div>
      <Outlet />
    </>
  );
}
