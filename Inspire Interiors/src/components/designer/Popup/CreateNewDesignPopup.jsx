import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateNewDesignPopup() {
  return (
    <div>
      <Link to="http://localhost:8000">
        <button style={{ border: "none", background: "none" }}>
          <div className="text-primary fs-5">+ Create New Design &nbsp;</div>
        </button>
      </Link>
    </div>
  );
}

export default CreateNewDesignPopup;
