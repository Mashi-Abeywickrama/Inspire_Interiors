import React, { useState } from "react";
import Popup from "./Popup";

function CreateNewDesignPopupHook() {
  const [open, SetOpen] = useState(false);

  //   const showPopup = () => {
  //     SetOpen(open == false ? true : true);
  //   };

  return (
    <div>
      <button
        style={{ border: "none", background: "none" }}
        onClick={() => SetOpen(!open)}
      >
        <div className="text-primary">+ Add New Design &nbsp;</div>
      </button>
      {open && <Popup SetOpen={SetOpen} />}
    </div>
  );
}

export default CreateNewDesignPopupHook;
