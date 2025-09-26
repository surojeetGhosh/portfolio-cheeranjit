import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
// width - 1024
export default function Layout() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col text-engineering-darkGray font-inter bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="min-h-screen min-w-screen">
        <Outlet />
      </div>
      <Footer className="font-inter footer-shadow text-center text-xs bg-white/80 backdrop-blur-sm" />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
