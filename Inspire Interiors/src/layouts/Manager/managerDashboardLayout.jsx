import { NavLink, Outlet } from "react-router-dom";
import SidebarDashboard from "../../components/manager/managerSidebar";
import Navigationbar from "../../components/customer/customerNav";

function CDashboardlayout() {
    return (
        <div className="d-flex flex-column gap-3 full">
            <Navigationbar />
            <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
                <SidebarDashboard />
                <Outlet />

            </div>
        </div>
    );
}

export default CDashboardlayout;