import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/footer";
import HeaderT from "../components/HeaderT";

function Rootlayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          {/* <h1>Header...</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">AboutUs</NavLink> */}
          <HeaderT />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Rootlayout;
