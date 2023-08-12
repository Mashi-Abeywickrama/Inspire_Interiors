import { React, useState } from "react";

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
import SignUp from "./pages/visitor/signup";

import Project from "./pages/visitor/project";
import OnlyHeaderRootlayout from "./layouts/onlyHeaderRootlayout";

// Admin

import Report from "./pages/Admin/report";
import ADashboardlayout from "./layouts/Admin/admindasahboardLayout";
import Dashboard from "./pages/Admin/dashboard";
import User from "./pages/Admin/user";
import Commission from "./pages/Admin/commission";
import Orders from "./pages/Admin/orders";
import Salary from "./pages/Admin/salary";
import Profile from "./pages/Admin/profile";
import Invoice from "./pages/Admin/invoice";
import Cview from "./pages/Admin/commissionView";

// Customer
import CDashboardlayout from "./layouts/Customer/customerDashboardlayout";
import CustomerDashboard from "./pages/Customer/customerDashboard";
import MyOrder from "./pages/Customer/orders/my_orders";
import Designs from "./pages/Customer/Designs/designs";
import BrowseDesigns from "./pages/Customer/Designs/browsedesigns";
import ViewProduct from "./pages/Customer/marketplace/viewProduct";
import ViewDesigner from "./pages/Customer/Designs/ViewDesigner";
import Cart from "./pages/Customer/marketplace/viewcart";
import CusSetting from "./pages/Customer/setting";
import Address from "./pages/Customer/checkout/address";
import PaymentMethod from "./pages/Customer/checkout/payment";
import ShippingMethod from "./pages/Customer/checkout/shipping";
import MarketPlace from "./pages/Customer/marketplace/marketPlace";

// Vendor

import VDashboardlayout from "./layouts/Vendor/vendorDashboardlayout";
import ViewOrder from "./pages/vendor/viewOrder";
import Inventory from "./pages/vendor/inventory";
import ViewCustomRequest from "./pages/vendor/viewCustomRequest";
import PromotedProduct from "./pages/vendor/promotedProduct";
import ViewStocks from "./pages/vendor/viewStocks";
import InventoryProduct from "./pages/vendor/inventoryProduct";
import PromotionRequest from "./pages/vendor/promotionRequest";
import Promotion from "./pages/vendor/promotion";
import PromotionEarnings from "./pages/vendor/promotionEarnings";
import CustomizeOrders from "./pages/vendor/customizedOrders";
import Order from "./pages/vendor/order";
import VendorDashboard from "./pages/vendor/vendorDashboard";
import AddStock from "./pages/vendor/addStock";
import MyNetwork from "./pages/vendor/myNetwork";
import Complaints from "./pages/vendor/complaints";
import VendorSetting from "./pages/vendor/setting";

// Customer Support
import CSDashboardlayout from "./layouts/CustomerSupport/customersupportDashboardlayout";
import Inquiry from "./pages/CustomerSupport/inquiry";
import Delivery from "./pages/CustomerSupport/delivery";
import Refund from "./pages/CustomerSupport/refund";
import ViewDelivery from "./pages/CustomerSupport/viewDelivery";
import ViewInquiry from "./pages/CustomerSupport/viewInquiry";
import ViewRefund from "./pages/CustomerSupport/viewRefund";
import CustomerSupportDashboard from "./pages/CustomerSupport/customerSupportdashboard";
import CategoryView from "./pages/Customer/marketplace/categoryView";

// Designer
import DesignerLayout from "./layouts/Designer/DesignerLayout";
import DesignerDashboard from "./pages/Designer/DesignerDashboard";
import DesignerMyDesigns from "./pages/Designer/DesignerMyDesigns";
import DesignerEarnings from "./pages/Designer/DesignerEarnings";
import DesignerEarn from "./pages/Designer/DesignerEarn";
import DesignerBankDetails from "./pages/Designer/DesignerBankDetails";
import DesignerPromotions from "./pages/Designer/DesignerPromotions";
import AlertPopup from "./components/AlertPopup";

import Test from "./pages/Designer/test";

import DesignerPromotion from "./pages/Designer/DesignerPromotion";
import DesignerSetting from "./pages/Designer/DesignerSetting";
import DesignerPromotionEarnings from "./pages/Designer/DesignerPromotionEarnings";
import DesignerDesigntool from "./pages/Designer/DesignerDesigntool";

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
        <Route
          index
          element={
            <>
              <AlertPopup />
              <Login />
            </>
          }
        />
      </Route>
      <Route
        path="/signup"
        element={<OnlyHeaderRootlayout />}
        errorElement={<Error />}
      >
        <Route index element={<SignUp />} />
      </Route>
      {/* Customer Routes */}
      <Route
        path="/customer/"
        element={<CDashboardlayout />}
        errorElement={<Home />}
      >
        <Route index element={<CustomerDashboard />} />
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="orders" element={<MyOrder />} />
        <Route path="designs" element={<Designs />} />
        <Route path="designs/browsedesigns" element={<BrowseDesigns />} />
        <Route path="marketplace/viewproduct" element={<ViewProduct />}></Route>
        <Route path="designs/viewdesigner" element={<ViewDesigner />} />
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="marketplace/categoryview" element={<CategoryView />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/address" element={<Address />} />
        <Route path="checkout/payment" element={<PaymentMethod />} />
        <Route path="checkout/shipping" element={<ShippingMethod />} />
        <Route path="settings" element={<CusSetting />}></Route>
      </Route>
      {/* Admin Routes */}
      <Route
        path="/Admin/"
        element={<CDashboardlayout />}
        errorElement={<Error />}
      >
        <Route index element={<Dashboard />} />
        <Route path="report" element={<Report />} />
        <Route path="user" element={<User />} />
        <Route path="commission" element={<Commission />} />
        <Route path="orders" element={<Orders />} />
        <Route path="salary" element={<Salary />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="profile" element={<Profile />} />
        <Route path="commissionView" element={<Cview />} />
      </Route>
      {/* Customer Support Routes */}
      <Route
        path="/customersupport/"
        element={<CSDashboardlayout />}
        errorElement={<Error />}
      >
        <Route index element={<CustomerSupportDashboard />} />
        <Route path="dashboard" element={<CustomerSupportDashboard />}></Route>
        <Route path="inquiry" element={<Inquiry />} />
        <Route path="delivery" element={<Delivery />} />
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
        <Route path="inventory" element={<Inventory />}></Route>
        <Route path="inventory/viewstock" element={<ViewStocks />}></Route>
        <Route
          path="inventory/inventoryproduct"
          element={<InventoryProduct />}
        ></Route>
        <Route path="inventory/addstock" element={<AddStock />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="order/vieworder" element={<ViewOrder />}></Route>
        <Route
          path="order/customizeorders"
          element={<CustomizeOrders />}
        ></Route>
        <Route
          path="order/customrequest"
          element={<ViewCustomRequest />}
        ></Route>
        <Route path="promotion" element={<Promotion />}></Route>
        <Route path="promotion/mynetwork" element={<MyNetwork />}></Route>
        <Route
          path="promotion/promoteproduct"
          element={<PromotedProduct />}
        ></Route>
        <Route
          path="promotion/promotionrequest"
          element={<PromotionRequest />}
        ></Route>
        <Route
          path="promotion/earnings"
          element={<PromotionEarnings />}
        ></Route>
        <Route path="complaints" element={<Complaints />}></Route>
        <Route path="setting" element={<VendorSetting />}></Route>
      </Route>

      {/* Designer Routes*/}
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
        <Route path="promotion" element={<DesignerPromotion />} />
        <Route
          path="promotion/earnings"
          element={<DesignerPromotionEarnings />}
        />
        <Route path="designtool" element={<DesignerDesigntool />} />

        <Route path="setting" element={<DesignerSetting />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
