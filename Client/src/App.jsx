import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default App;
