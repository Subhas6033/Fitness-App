import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Common/Nav";
import Footer from "../Components/Common/Footer";

export default function MainLayout({ children }) {
  const location = useLocation();

  // Hide Navbar and Footer if the current route is 404
  const hideLayout = location.pathname === "/404";

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
