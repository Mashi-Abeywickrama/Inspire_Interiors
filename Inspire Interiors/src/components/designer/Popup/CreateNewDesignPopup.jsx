import React, { useState } from "react";
import AddPopup from "./AddPopup";

function CreateNewDesignPopup() {
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <button
        style={{ border: "none", background: "none" }}
        onClick={() => SetOpen(!open)}
      >
        <div className="text-primary">+ Create New Design &nbsp;</div>
      </button>
      {open && <AddPopup SetOpen={SetOpen} />}
    </div>
  );
}

export default CreateNewDesignPopup;
