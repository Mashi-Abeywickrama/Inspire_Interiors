import { NavLink, Outlet } from "react-router-dom";
import SidebarDashboard from "../../components/customer/sidebar";
import Navigationbar from "../../components/customer/customerNav";
import ChatWidget from "@papercups-io/chat-widget";

function CDashboardlayout() {
  return (
     <>
    
    <ChatWidget
        // `accountId` is used instead of `token` in older versions
        // of the @papercups-io/chat-widget package (before v1.2.x).
        // You can delete this line if you are on the latest version.
        // accountId="73d1502c-ec2b-4ed9-a673-468a61f92742"
        token="73d1502c-ec2b-4ed9-a673-468a61f92742"
        inbox="b5ab1911-b400-4046-bdde-9d570d258db2"
        title="Welcome to inspire interiors"
        subtitle="Ask us anything in the chat window below 😊"
        primaryColor="#035C94"
        greeting="Hello! Its Inspire Interiors customer support! How can we help you today?"
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={true}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={true}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
        // Optionally include data about your customer here to identify them
        // customer={{
        //   name: __CUSTOMER__.name,
        //   email: __CUSTOMER__.email,
        //   external_id: __CUSTOMER__.id,
        //   metadata: {
        //     plan: "premium"
        //   }
        // }}
      />
    <div className="d-flex flex-column gap-3 full">
        <Navigationbar />
        <div className="d-flex gap-4 w-100 max-width justify-content-start  ">
            <SidebarDashboard />
            <Outlet />
            
        </div>
    </div>
    </>
  );
}

export default CDashboardlayout;