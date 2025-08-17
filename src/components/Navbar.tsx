import { Link } from "react-router-dom";
import resource from "@assets/resource.json";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  return (
    <div className={className}>
      <div className="flex w-3/5 text-center tracking-widest font-bold py-3 items-center-safe font-roboto mx-auto box-border cursor-default">
        <Link
          to="/"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          {resource["menu-item"][0]}
        </Link>
        <Link
          to="/academic"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          {resource["menu-item"][1]}
        </Link>
        <Link
          to="/experience"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          {resource["menu-item"][2]}
        </Link>
        <Link
          to="/skills"
          className="flex-2 p-3 border-solid border-b-5 border-white transition delay-150 duration-300 ease-in-out hover:border-amber-400"
        >
          {resource["menu-item"][3]}
        </Link>
      </div>
    </div>
  );
}
