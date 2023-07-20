import Header from "../components/header";
import { NavLink, Outlet } from "react-router-dom";

export default function Rootlayout() {
  return (
    <div className="root-layout">
      {/* <Header /> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="services">Services</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
