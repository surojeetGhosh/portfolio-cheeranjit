import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
// width - 1024
export default function Layout() {
  return (
    <div className="flex w-screen h-screen flex-col bg-white text-gray-700">
      <Navbar className="flex-auto" />
      <div className="flex-auto h-screen w-screen">
        <Outlet />
      </div>
      <Footer className="flex font-roboto flex-auto px-5 py-2 items-center footer-shadow" />
      <TanStackRouterDevtools />
    </div>
  );
}
