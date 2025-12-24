import React from "react";

import Navbar from "../Components/Common/Nav";
import Footer from "../Components/Common/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
