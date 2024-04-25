import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        showStatus={false}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div className="w-full h-52 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://storage.googleapis.com/putatoeapp/Image/testImage/MXJ01L3"
          />
        </div>
        <div className="w-full h-52 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://storage.googleapis.com/putatoeapp/Image/testImage/CS2T0EG"
          />
        </div>
        <div className="w-full h-52 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://storage.googleapis.com/putatoeapp/Image/testImage/V2I25QX"
          />
        </div>
        <div className="w-full h-52 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://storage.googleapis.com/putatoeapp/Image/testImage/HFY0ZD9"
          />
        </div>
        <div className="w-full h-52 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://storage.googleapis.com/putatoeapp/Image/testImage/4NXEA6H"
          />
        </div>
        <div className="w-full h-52 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://storage.googleapis.com/putatoeapp/Image/testImage/8HBMUHJ"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
