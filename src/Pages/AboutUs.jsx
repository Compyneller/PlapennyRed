import React from "react";
import ASection1 from "../components/AboutUsSections/ASection1";
import ASection2 from "../components/AboutUsSections/ASection2";
import Footer from "../components/Footer";
import NavBarComp from "../components/NavBarComp/NavBarComp";

const AboutUs = () => {
  return (
    <>
      <NavBarComp />
      <br />
      <br />
      <ASection1 />
      <ASection2 />
      <Footer />
    </>
  );
};

export default AboutUs;
