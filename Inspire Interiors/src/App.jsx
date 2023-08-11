import React from "react";
import { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./pages/visitor/AboutUs";
import Rootlayout from "./layouts/Rootlayout";
import Error from "./pages/visitor/error";
import Login from "./pages/visitor/login";
import Home from "./pages/visitor/home";
import Contact from "./pages/visitor/contact";
import Services from "./pages/visitor/services";
import Project from "./pages/visitor/project";
import OnlyHeaderRootlayout from "./layouts/onlyHeaderRootlayout";
import CDashboardlayout from "./layouts/Customer/customerDashboardlayout";
import MyOrder from "./pages/Customer/orders/my_orders";
import VDashboardlayout from "./layouts/Vendor/vendorDashboardlayout";
import ViewOrder from "./pages/vendor/viewOrder";
import Promotion from "./pages/vendor/promotion";
import OverView from "./pages/vendor/overview";
import ViewCustomRequest from "./pages/vendor/viewCustomRequest";
import PromotedProduct from "./pages/vendor/promotedProduct";
import ViewStocks from "./pages/vendor/viewStocks";
import InventoryProduct from "./pages/vendor/inventoryProduct";
import PromotionRequest from "./pages/vendor/promotionRequest";
import DesignerLayout from "./layouts/Designer/DesignerLayout";
import DesignerDashboard from "./pages/Designer/DesignerDashboard";
import DesignerMyDesigns from "./pages/Designer/DesignerMyDesigns";
import Popup from "./components/designer/Popup/Popup";
import DesignerEarnings from "./pages/Designer/DesignerEarnings";
import Test from "./pages/Designer/test";
import DesignerEarn from "./pages/Designer/DesignerEarn";
import DesignerBankDetails from "./pages/Designer/DesignerBankDetails";
import DesignerPromotion from "./pages/Designer/DesignerPromotion";
import DesignerSetting from "./pages/Designer/DesignerSetting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Rootlayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Project />} />
      </Route>
      <Route
        path="/login"
        element={<OnlyHeaderRootlayout />}
        errorElement={<Error />}
      >
        <Route index element={<Login />} />
      </Route>
      <Route
        path="/customer/"
        element={<CDashboardlayout />}
        errorElement={<Home />}
      >
        <Route index element={<MyOrder />} />
      </Route>
      <Route
        path="/vendor/"
        element={<VDashboardlayout />}
        errorElement={<Error />}
      >
        <Route index element={<OverView />} />
        <Route path="vieworder" element={<ViewOrder />}></Route>
        <Route path="promotion" element={<Promotion />}></Route>
        <Route path="overview" element={<OverView />}></Route>
        <Route path="customrequest" element={<ViewCustomRequest />}></Route>
        <Route path="promoteproduct" element={<PromotedProduct />}></Route>
        <Route path="viewstock" element={<ViewStocks />}></Route>
        <Route path="inventoryproduct" element={<InventoryProduct />}></Route>
        <Route path="promotionrequest" element={<PromotionRequest />}></Route>
      </Route>
      <Route
        path="/designer"
        element={<DesignerLayout />}
        errorElement={<Error />}
      >
        <Route index element={<DesignerDashboard />} />
        <Route path="mydesigns" element={<DesignerMyDesigns />} />
        <Route path="test" element={<Test />} />
        <Route path="earningsall" element={<DesignerEarnings />} />
        <Route path="earnings" element={<DesignerEarn />} />
        <Route path="bankdetails" element={<DesignerBankDetails />} />
        <Route path="promotion" element={<DesignerPromotion />}
      
         />
        <Route path="setting" element={<DesignerSetting />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    // <>
    //   <VenderRoute />
    //   <VisitorRoute />
    // </>
    <RouterProvider router={router} />
  );
};

export default App;
