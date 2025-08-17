import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// width - 1024
export default function Layout() {
  return (
    <div className="flex w-screen h-screen flex-col">
      <Navbar className="flex-auto" />
      <div className="flex-auto h-screen w-screen">
        <Outlet />
      </div>
      <Footer className="font-roboto flex-auto p-5" />
    </div>
  );
}
