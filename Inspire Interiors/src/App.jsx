import { React, useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
  BrowserRouter,
  Routes,
  Router,
} from "react-router-dom";

import { useSession } from "./constants/SessionContext";

import AboutUs from "./pages/visitor/AboutUs";
import Rootlayout from "./layouts/Rootlayout";
import Error from "./pages/visitor/error";
import Login from "./pages/visitor/login";
import Home from "./pages/visitor/home";
import Contact from "./pages/visitor/contact";
import Services from "./pages/visitor/services";
import SignUp from "./pages/visitor/signup";
import MyTeam from "./pages/visitor/team";
import Project from "./pages/visitor/project";
import OnlyHeaderRootlayout from "./layouts/onlyHeaderRootlayout";

// Admin

import Report from "./pages/Admin/report";
import ADashboardlayout from "./layouts/Admin/admindasahboardLayout";
import User from "./pages/Admin/user";
import Commission from "./pages/Admin/commission";
import Orders from "./pages/Admin/orders";
import Salary from "./pages/Admin/salary";
import Profile from "./pages/Admin/profile";
import Invoice from "./pages/Admin/invoice";
import Cview from "./pages/Admin/commissionView";
import ADSetting from "./pages/Admin/settings";
import AdminDashboard from "./pages/Admin/dashboard";

// Customer
import CDashboardlayout from "./layouts/Customer/customerDashboardlayout";
import CustomerDashboard from "./pages/Customer/customerDashboard";
import MyOrder from "./pages/Customer/orders/my_orders";
import OrderView from "./pages/Customer/orders/vieworder";
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
import PopularView from "./pages/Customer/marketplace/popular";

//Manager
import ManagerDashboardLayout from "./layouts/Manager/managerDashboardLayout";
// import CustomerDashboard from "./pages/Customer/customerDashboard";
import Delivery from "./pages/Manager/delivery";
import ViewDelivery from "./pages/Manager/viewDelivery";
import MInquiry from "./pages/Manager/inquiry";
import MInquiryView from "./pages/Manager/viewInquiry";
import ManagerDashboard from "./pages/Manager/managerDashboard";

// Vendor

import VDashboardlayout from "./layouts/Vendor/vendorDashboardlayout";
import ViewOrder from "./pages/vendor/viewOrder";
import Inventory from "./pages/vendor/inventory";
import ViewCustomRequest from "./pages/vendor/viewCustomRequest";
import ViewAcceptRequest from "./pages/vendor/viewAcceptRequest";
import PromotedProduct from "./pages/vendor/promotedProduct";
import ViewStocks from "./pages/vendor/viewStocks";
import InventoryProduct from "./pages/vendor/inventoryProduct";
import PromotionRequest from "./pages/vendor/promotionRequest";
import Promotion from "./pages/vendor/promotion";
import PromotionExpenses from "./pages/vendor/promotionExpenses";
import CustomizeOrders from "./pages/vendor/customizedOrders";
import Order from "./pages/vendor/order";
import VendorDashboard from "./pages/vendor/vendorDashboard";
import AddStock from "./pages/vendor/addStock";
import MyNetwork from "./pages/vendor/myNetwork";
import Complaints from "./pages/vendor/complaints";
import VendorSetting from "./pages/vendor/setting";
import ViewComplaint from "./pages/vendor/viewComplaint";
import BrowseDesigner from "./pages/vendor/browseDesigner";
import ViewDesigners from "./pages/vendor/viewDesigner";

// Customer Support
import CSDashboardlayout from "./layouts/CustomerSupport/customersupportDashboardlayout";
import Inquiry from "./pages/CustomerSupport/inquiry";
// import Delivery from "./pages/CustomerSupport/delivery";
import Refund from "./pages/CustomerSupport/refund";
// import ViewDelivery from "./pages/CustomerSupport/viewDelivery";
import ViewInquiry from "./pages/CustomerSupport/viewInquiry";
import ViewRefund from "./pages/CustomerSupport/viewRefund";
import CustomerSupportDashboard from "./pages/CustomerSupport/customerSupportdashboard";
import Custom from "./pages/Customer/Customization/custom";
import CategoryView from "./pages/Customer/marketplace/categoryView";
import ViewCustomizeRequest from "./pages/Customer/Customization/viewCustomizeRequest";

// Designer
import DesignerLayout from "./layouts/Designer/DesignerLayout";
import DesignerDashboard from "./pages/Designer/DesignerDashboard";
import DesignerMyDesigns from "./pages/Designer/DesignerMyDesigns";
import { DesignLoader } from "./Loaders/Designer/MyDesignsLoader";
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
import { Loader } from "semantic-ui-react";
import DesignerCustomerRequest from "./pages/Designer/DesignerCustomerRequest";
import DesignerCRequestview from "./pages/Designer/DesignerCRequestview";
import DesignerMyDesignView from "./pages/Designer/DesignerMyDesignView";
import DesignerDraftedDesigns from "./pages/Designer/DesignerDraftedDesigns";
import DesignerRequestedDesigns from "./pages/Designer/DesignerRequestedDesigns";

import TypeView from "./pages/Customer/marketplace/typeView";
import ViewVendor from "./pages/Designer/viewVendor";
import ViewAcceptedPromotion from "./pages/Designer/ViewAcceptPromotion";
import ViewReceivedPromotion from "./pages/Designer/ViewReceivedPromotion";
import ViewAllDesigners from "./pages/Customer/Designs/seeAllDesigners";

import ViewProductDesigner from "./pages/Designer/ViewProductDesigner";

import ViewDesignC from "./pages/Customer/Designs/viewDesign";
import RProductView from "./pages/Customer/marketplace/recommandedProduct";





const routes = (
  <>
    <Route path="/" element={<Rootlayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Project />} />
      <Route path="team" element={<MyTeam />} />
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
      <Route path="designs/browsedesigns/:roomtype" element={<BrowseDesigns />} />
      <Route
        path="marketplace/viewproduct/:id"
        element={<ViewProduct />}
      ></Route>
      <Route
        path="marketplace/recommended/:productid/:designerid"
        element={<RProductView />}
      ></Route>
      <Route path="designs/viewdesigner" element={<ViewDesigner />} />
      <Route
        path="designs/alldesigners"
        element={<ViewAllDesigners />}
      />
      <Route
      path="designs/viewdesign/:id"
      element={<ViewDesignC />}
    />
      <Route path="marketplace" element={<MarketPlace />} />
      {/* <Route path="marketplace/categoryview" element={<CategoryView />} /> */}
      <Route
        path="marketplace/categoryview/:roomType"
        element={<CategoryView />}
      />
      <Route path="marketplace/category/:Type" element={<TypeView />} />
      <Route path="marketplace/popularItems" element={<PopularView />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout/address" element={<Address />} />
      <Route path="checkout/payment" element={<PaymentMethod />} />
      <Route path="checkout/shipping" element={<ShippingMethod />} />
      <Route path="orders/vieworder/:id" element={<OrderView />} />
      <Route path="customization" element={<Custom />}></Route>
      <Route path="viewcustomrequest/:id" element={<ViewCustomizeRequest />} />
      <Route path="settings" element={<CusSetting />}></Route>
    </Route>
    {/* Admin Routes */}
    <Route
      path="/Admin/"
      element={<ADashboardlayout />}
      errorElement={<Error />}
    >
      <Route index element={<AdminDashboard />} />
      <Route path="dashboard" element={<AdminDashboard />}></Route>
      <Route path="report" element={<Report />} />
      <Route path="user" element={<User />} />
      <Route path="commission" element={<Commission />} />
      <Route path="orders" element={<Orders />} />
      <Route path="salary" element={<Salary />} />
      <Route path="orders/invoice/:orderid" element={<Invoice />} />
      <Route path="user/profile/:userid" element={<Profile />} />
      <Route path="commision/commissionView/:userid" element={<Cview />} />
      <Route path="settings" element={<ADSetting />} />
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
      {/* <Route path="delivery" element={<Delivery />} /> */}
      <Route path="refund" element={<Refund />}></Route>
      {/* <Route path="delivery/view" element={<ViewDelivery />}></Route> */}
      <Route path="inquiry/view/:type/:id" element={<ViewInquiry />}></Route>
      <Route path="refund/view" element={<ViewRefund />}></Route>
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
      <Route path="order/customizeorders" element={<CustomizeOrders />}></Route>
      <Route path="order/customrequest" element={<ViewCustomRequest />}></Route>
      <Route path="order/acceptrequest" element={<ViewAcceptRequest />}></Route>
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
      <Route path="promotion/expenses" element={<PromotionExpenses />}></Route>
      <Route
        path="promotion/browsedesigner"
        element={<BrowseDesigner />}
      ></Route>
      <Route path="promotion/viewdesigners" element={<ViewDesigners />}></Route>
      <Route path="complaints" element={<Complaints />}></Route>
      <Route
        path="complaints/viewcomplaint"
        element={<ViewComplaint />}
      ></Route>
      <Route path="setting" element={<VendorSetting />}></Route>
    </Route>

    {/* Designer Routes */}
    <Route
      path="/designer/"
      element={<DesignerLayout />}
      errorElement={<Error />}
    >
      <Route index element={<DesignerDashboard />} />
      <Route path="dashboard" element={<DesignerDashboard />} />
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
      <Route
        path="promotion/viewvendor"
        element={<ViewVendor />}
      />
      <Route
        path="promotion/viewacceptpromotion"
        element={<ViewAcceptedPromotion />}
      />
      <Route
        path="promotion/viewreceivedpromotion"
        element={<ViewReceivedPromotion />}
      />
      <Route path="promotion/product/:id" element={<ViewProductDesigner />} />
      <Route path="designtool" element={<DesignerDesigntool />} />

      <Route path="setting" element={<DesignerSetting />} />
      <Route path="test" element={<Test />} />
      <Route path="requests" element={<DesignerCustomerRequest />} />
      <Route path="crequestview/:id" element={<DesignerCRequestview />} />
      <Route path="mydesignview/:id" element={<DesignerMyDesignView />} />
      <Route path="drafteddesigns" element={<DesignerDraftedDesigns />} />
      <Route path="requesteddesigns" element={<DesignerRequestedDesigns />} />
    </Route>

    {/* Manager Routes */}
    <Route
      path="/manager/"
      element={<ManagerDashboardLayout />}
      errorElement={<Error />}
    >
      <Route index element={<ManagerDashboard />} />
      <Route path="dashboard" element={<ManagerDashboard />} />
      <Route path="delivery" element={<Delivery />} />
      <Route path="delivery/view/:id" element={<ViewDelivery />}></Route>
      <Route path="mydesigns" element={<DesignerMyDesigns />} />
      <Route path="inquiry" element={<MInquiry />} />
      <Route path="inquiry/view/:type/:id" element={<MInquiryView />} />
    </Route>
  </>
);

const App = () => {
  const currentURL = window.location.href;
  const sessionItems = useSession();
  const splitURL = currentURL.split("/");
  if (
    splitURL[3] === "customer" ||
    splitURL[3] === "vendor" ||
    splitURL[3] === "support" ||
    splitURL[3] === "designer" ||
    splitURL[3] === "admin" ||
    splitURL[3] === "manager"
  ) {
    console.log(sessionItems.sessionData);
    if (
      sessionItems.sessionData === null ||
      sessionItems.sessionData.userType === undefined
    ) {
      window.location.href = "/login";
    } else {
      if (sessionItems.sessionData.userType !== splitURL[3]) {
        window.location.href = "/login";
      } else {
        const router = createBrowserRouter(createRoutesFromElements(routes));
        return <RouterProvider router={router} />;
      }
    }
  } else {
    const router = createBrowserRouter(createRoutesFromElements(routes));
    return <RouterProvider router={router} />;
  }
};

export default App;
