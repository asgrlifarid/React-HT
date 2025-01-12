import React from "react";
import Header from "../ClientHeader";
import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;
