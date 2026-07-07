import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function SiteLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
