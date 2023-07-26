import React from "react";
import { Outlet } from "react-router-dom";
import DesignerSidebar from "../../components/designer/DesignerSidebar";
import DesignerNavigationBar from "../../components/designer/DesignerNavigationBar";

function DesignerLayout() {
  return (
    <div className="d-flex flex-column gap-3 full">
      <DesignerNavigationBar />
      <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
        <DesignerSidebar />

        <Outlet />
      </div>
    </div>
  );
}

export default DesignerLayout;
