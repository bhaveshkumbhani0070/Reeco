import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/Order/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
