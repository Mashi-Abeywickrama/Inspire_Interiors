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

// import Project from './pages/visitor/project';
// import OnlyHeaderRootlayout from './layouts/onlyHeaderRootlayout';
// import CDashboardlayout from './layouts/Customer/customerDashboardlayout';
// import MyOrder from './pages/Customer/orders/my_orders';
import Report from './pages/Admin/report';
import Dashboard from './pages/Admin/dashboard';
import User from './pages/Admin/user';
import Commission from './pages/Admin/commission';
import Orders from './pages/Admin/orders';
import Salary from './pages/Admin/salary';

import Project from "./pages/visitor/project";
import OnlyHeaderRootlayout from "./layouts/onlyHeaderRootlayout";

// Customer
import CDashboardlayout from "./layouts/Customer/customerDashboardlayout";
import MyOrder from "./pages/Customer/orders/my_orders";
import Designs from "./pages/Customer/Designs/designs";
import BrowseDesigns from "./pages/Customer/Designs/browsedesigns";

// Vendor
import VDashboardlayout from "./layouts/Vendor/vendorDashboardlayout";
import ViewOrder from "./pages/vendor/viewOrder";
import OverView from "./pages/vendor/overview";
import ViewCustomRequest from "./pages/vendor/viewCustomRequest";
import PromotedProduct from "./pages/vendor/promotedProduct";
import ViewStocks from "./pages/vendor/viewStocks";
import InventoryProduct from "./pages/vendor/inventory";
import PromotionRequest from "./pages/vendor/promotionRequest";
import SentPromotion from "./pages/vendor/sentPromotion";
import ReceivedPromotion from "./pages/vendor/receivedPromtion";
import PromotionEarnings from "./pages/vendor/promotionEarnings";
import CustomizedOrders from "./pages/vendor/customizedOrders";
import Order from "./pages/vendor/order";
import VendorDashboard from "./pages/vendor/vendorDashboard";

// Customer Support
import CSDashboardlayout from "./layouts/CustomerSupport/customersupportDashboardlayout";
import Inquiry from "./pages/CustomerSupport/inquiry";
import Delivery from "./pages/CustomerSupport/delivery";
import Refund from "./pages/CustomerSupport/refund";
import ViewDelivery from "./pages/CustomerSupport/viewDelivery";
import ViewInquiry from "./pages/CustomerSupport/viewInquiry";
import ViewRefund from "./pages/CustomerSupport/viewRefund";
import CustomerSupportDashboard from "./pages/CustomerSupport/customerSupportdashboard";

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

      {/* Customer Routes */}
      <Route
        path="/customer/"
        element={<CDashboardlayout />}
        errorElement={<Home />}
      >
        <Route index element={<MyOrder />} />
        <Route path = "designs" element={<Designs />} />
        <Route path = "browsedesigns" element={<BrowseDesigns />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/Admin/" element={<CDashboardlayout />} errorElement={<Error />}>
        <Route index element={<Dashboard/> } />
        <Route path="report" element={<Report/> } />
        <Route  path="user" element={<User/> } />
        <Route  path="commission" element={<Commission/> } />
        <Route  path="orders" element={<Orders/> } />
        <Route  path="salary" element={<Salary/> } />
      </Route>

      {/* Customer Support Routes */}
      <Route path="/customersupport/" element={<CSDashboardlayout />} errorElement={<Error />}>
        <Route index element={<CustomerSupportDashboard/> } />
        <Route path="dashboard" element={<CustomerSupportDashboard />}></Route>
        <Route path="inquiry" element={<Inquiry/> } />
        <Route path="delivery" element={<Delivery/> } />
        <Route path="refund" element={<Refund />}></Route>
        <Route path="viewdelivery" element={<ViewDelivery />}></Route>
        <Route path="viewinquiry" element={<ViewInquiry />}></Route>
        <Route path="viewrefund" element={<ViewRefund />}></Route>
      </Route>

      {/* Vendor Routes */}
      <Route
        path="/vendor/"
        element={<VDashboardlayout />}
        errorElement={<Error />}
      >
        <Route index element={<VendorDashboard />} />
        <Route path="dashboard" element={<VendorDashboard />}></Route>
        <Route path="vieworder" element={<ViewOrder />}></Route>
        <Route path="sentpromotion" element={<SentPromotion />}></Route>
        <Route path="receivedpromotion" element={<ReceivedPromotion />}></Route>
        <Route path="overview" element={<OverView />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="customizeorders" element={<CustomizedOrders />}></Route>
        <Route path="customrequest" element={<ViewCustomRequest />}></Route>
        <Route path="promoteproduct" element={<PromotedProduct />}></Route>
        <Route path="viewstock"  element={<ViewStocks />}></Route>
        <Route path="inventory" element={<InventoryProduct />}></Route>
        <Route path="promotionrequest" element={<PromotionRequest />}></Route>
        <Route path="earnings" element={<PromotionEarnings />}></Route>
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
