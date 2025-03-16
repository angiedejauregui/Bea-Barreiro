import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SobreMi from "./SobreMi";
import PorqueYo from "./PorqueYo";
import Proceso from "./Proceso";
import Testimonio from "./Testimonio";
import Faq from "./Faq";
import Cta from "./Cta";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
        <SobreMi />
        <PorqueYo />
        <Proceso />
        <Testimonio />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
