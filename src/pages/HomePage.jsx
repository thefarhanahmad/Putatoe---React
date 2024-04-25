import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import CarouselSlider from "../components/CarouselSlider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto relative">
      {/* Navbar */}
      <Navbar />

      {/* services*/}
      <Services />

      {/* Carousel */}
      <CarouselSlider />

      {/* Products */}
      <Products />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
