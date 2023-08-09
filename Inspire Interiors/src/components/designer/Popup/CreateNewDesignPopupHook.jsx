import React, { useState } from "react";
import Popup from "./Popup";

function CreateNewDesignPopupHook() {
  const [open, SetOpen] = useState(false);

  //   const showPopup = () => {
  //     SetOpen(open == false ? true : true);
  //   };

  return (
    <div>
      <button style={{ border: "none" }} onClick={() => SetOpen(!open)}>
        + Create New Design &nbsp;
      </button>
      {open && <Popup SetOpen={SetOpen} />}
    </div>
  );
}

export default CreateNewDesignPopupHook;
