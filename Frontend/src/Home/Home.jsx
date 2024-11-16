import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
};

export default Home;
