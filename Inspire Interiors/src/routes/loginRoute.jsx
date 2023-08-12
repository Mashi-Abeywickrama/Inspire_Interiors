
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import OnlyHeaderRootlayout from "../layouts/onlyHeaderRootlayout";
import Error from "../pages/visitor/error";
import Login from "../pages/visitor/login";

const LoginRoute = ()=>(

    <>
    <Route path="/login" element={<OnlyHeaderRootlayout />} errorElement={<Error />}>
      <Route index element={<Login /> } />
    </Route>
    </>
  )
;

export default LoginRoute;
