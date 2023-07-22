import { NavLink, Outlet } from "react-router-dom";
import HeaderT from "../components/HeaderT";

function OnlyHeaderRootlayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <HeaderT />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default OnlyHeaderRootlayout;
