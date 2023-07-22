
import React from "react";
import { useState } from "react";

import "./App.css";
import VisitorRoute from "./routes/visitorRoute";
import VenderRoute from "./routes/vendorRoute";

const App = () => {

  return (

    <>
      <VenderRoute />
      <VisitorRoute />
    </>
  );
};


export default App;
