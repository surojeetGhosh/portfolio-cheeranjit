import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
// width - 1024
export default function Layout() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col text-gray-700">
      <Navbar />
      <div className="min-h-screen min-w-screen">
        <Outlet />
      </div>
      <Footer className="font-roboto footer-shadow text-center text-xs" />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
