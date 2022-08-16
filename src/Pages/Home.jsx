import React from "react";
import CardsComp from "../components/CardsComp/CardsComp";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import JoyBegins from "../components/JoyBegins/JoyBegins";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import Section1 from "../components/Section1/Section1";
import Section3 from "../components/Section3/Section3";
import Section5 from "../components/Section5/Section5";

const Home = () => {
  return (
    <>
      <NavBarComp />
      <Hero />
      <Section1 />
      <CardsComp />
      <Section3 />
      <JoyBegins />
      <Section5 />
      <Footer />
    </>
  );
};

export default Home;
