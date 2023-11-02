import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../../constants/SessionContext";

function CreateNewDesignPopup() {
  //get designer id from session
  const session = useSession();
  // console.log("User id is " + session.sessionData.userid);
  const id = session.sessionData.userid.toString();
  return (
    <div>
      <Link to={"http://localhost:8000?did=" + id}>
        <button style={{ border: "none", background: "none" }}>
          <div className="text-primary fs-5">+ Create New Design &nbsp;</div>
        </button>
      </Link>
    </div>
  );
}

export default CreateNewDesignPopup;
