import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {
  beverageItems,
  dairyProducts,
  fruitProducts,
  groceryProducts,
  subServices,
  vegetableProducts,
} from "../data";
import ProductCard from "./ProductCard";

const Products = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="w-full  bg-gray-100">
      <div className="w-[90%] mx-auto flex flex-col gap-4 py-4">
        <h2 className="text-3xl font-semibold -ml-6 text-[#03989e]">
          Top Deals
        </h2>

        {/* BEVERAGE PRODUCTS */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex text-[#03989e] justify-between text-xl font-semibold items-center">
            <h3>Beverages</h3>
            <button>View All</button>
          </div>

          {/* products swiper */}
          <div className="w-full bg-[#fff] p-4 shadow-md">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={10}
              thumbs={false}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {beverageItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    name={item.name}
                    subName={item.subName}
                    price={item.price}
                    discount={item.discount}
                    type={item.type}
                    unit={item.unit}
                    star={item.star}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* DAIRY PRODUCTS */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex text-[#03989e] justify-between text-xl font-semibold items-center">
            <h3>Dairy Products</h3>
            <button>View All</button>
          </div>

          {/* products swiper */}
          <div className="w-full bg-[#fff] p-4 shadow-md">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={10}
              thumbs={false}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {dairyProducts.map((item, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    name={item.name}
                    subName={item.subName}
                    price={item.price}
                    discount={item.discount}
                    type={item.type}
                    unit={item.unit}
                    star={item.star}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* FRUITS PRODUCTS */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex text-[#03989e] justify-between text-xl font-semibold items-center">
            <h3>Fruits</h3>
            <button>View All</button>
          </div>

          {/* products swiper */}
          <div className="w-full bg-[#fff] p-4 shadow-md">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={10}
              thumbs={false}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {fruitProducts.map((item, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    name={item.name}
                    subName={item.subName}
                    price={item.price}
                    discount={item.discount}
                    type={item.type}
                    unit={item.unit}
                    star={item.star}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* GROCERY PRODUCTS */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex text-[#03989e] justify-between text-xl font-semibold items-center">
            <h3>Grocery</h3>
            <button>View All</button>
          </div>

          {/* products swiper */}
          <div className="w-full bg-[#fff] p-4 shadow-md">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={10}
              thumbs={false}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {groceryProducts.map((item, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    name={item.name}
                    subName={item.subName}
                    price={item.price}
                    discount={item.discount}
                    type={item.type}
                    unit={item.unit}
                    star={item.star}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* VEGETABLES PRODUCTS */}
        <div className="flex flex-col gap-2">
          <div className="w-full flex text-[#03989e] justify-between text-xl font-semibold items-center">
            <h3>Vegetables</h3>
            <button>View All</button>
          </div>

          {/* products swiper */}
          <div className="w-full bg-[#fff] p-4 shadow-md">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={10}
              thumbs={false}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {vegetableProducts.map((item, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    name={item.name}
                    subName={item.subName}
                    price={item.price}
                    discount={item.discount}
                    type={item.type}
                    unit={item.unit}
                    star={item.star}
                    stock={item.stock}
                    imageUrl={item.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* SUBSERVICES */}
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-xl text-[#03989e] font-semibold">
            All SubServices
          </h2>
          <div className="w-full flex flex-wrap gap-6">
            {subServices.map((element, i) => {
              return (
                <div key={i} className="w-[45%] sm:w-[30%] hover:scale-105 transition-all duration-200 hover:shadow-md relative p-1 bg-[#fff]">
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={element.image}
                      alt={element.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-full bg-gray-600 h-full  cursor-pointer transition-all duration-200  opacity-40"></span>
                  <span className="text-xl absolute top-[90%] left-[50%] -translate-x-[50%] -translate-y-[90%] text-center  text-white font-bold">
                    {element.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Products;
