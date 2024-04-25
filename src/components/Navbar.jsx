import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

const Navbar = () => {
  return (
    // wrapper
    <div className="bg-[#00838f] w-full sm:h-24 gap-4 sm:gap-0 p-3 flex flex-col sm:flex-row  justify-center items-center">
      {/* main navbar */}
      <div className=" text-white w-[90%] flex mx-auto  justify-between gap-10 items-center">
        {/* Logo */}
        <div className=" flex gap-3">
          <div className="sm:h-20 h-16 w-16 sm:w-20">
            <img
              src="https://putatoe.com/static/media/logo.aa9da4f6375a03f8abbe.png"
              alt="putato"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">PUTATOE</h1>
            <p className="text-sm font-semibold text-right -mr-3">
              One Solution
            </p>
          </div>
        </div>

        {/* Location */}
        <div className=" hidden sm:flex cursor-pointer  text-sm font-semibold items-center justify-center gap-2">
          <span>Gorakhpur, Uttar Pradesh...</span>
          <button>
            <IoChevronDown />
          </button>
        </div>

        {/* Search */}
        <div className="bg-white text-black hidden  w-[22%]  lg:flex justify-center items-center gap-1 p-1 rounded-xl">
          <span className="w-[10%]">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            placeholder="Search for Products and Brands"
            className="placeholder:text-xs w-[85%] outline-none pl-2"
          />
        </div>

        {/* Icons */}
        <div className=" flex justify-evenly gap-8  items-center ml-20 sm:ml-0">
          <div className="relative w-6 h-6 hidden sm:flex">
            <img
              src="https://putatoe.com/static/media/comment-multiple-svgrepo-com.f69425ee860b88e3f8e436b83aa01fee.svg"
              alt="chats"
            />
            <span
              className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
            >
              0
            </span>
          </div>
          <div className="relative w-6 h-6">
            <img
              src="https://putatoe.com/static/media/bell-svgrepo-com.6f0101ed128197b6d089082da933240d.svg"
              alt="notifications"
            />
            <span
              className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
            >
              0
            </span>
          </div>
          <div className="relative w-6 h-6">
            <img
              src="https://putatoe.com/static/media/cart-svgrepo-com.a820f2596d361153df29ebe4dccd767f.svg"
              alt="cart"
            />
            <span
              className="absolute -top-2 -right-3 bg-red-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
            >
              0
            </span>
          </div>
        </div>

        {/* Login Button */}
        <div className=" flex justify-center items-center">
          <button className="px-3 py-1 hidden  sm:flex justify-center items-center rounded-lg border-2 font-semibold ">
            Log In
          </button>
          <button className="flex sm:hidden text-2xl">
            <FaUserCircle />
          </button>
        </div>
      </div>

      {/* search icons in mobile */}
      <div className="w-[90%] mx-auto flex justify-center gap-2 items-center sm:hidden">
        {/* search */}
        <div className="bg-white w-[90%] text-black flex justify-center items-center gap-1 pl-3 py-1 rounded-xl">
          <span className="w-[10%]">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            placeholder="Search for Products and Brands"
            className="placeholder:text-xs w-[80%] outline-none pl-2"
          />
          <span className="w-[10%]">
            <BsSendFill />
          </span>
        </div>

        {/* chats */}
        <div className=" flex justify-center items-center w-[10%]">
          <div className="h-6 w-6">
            <img
              src="https://putatoe.com/static/media/comment-multiple-svgrepo-com.f69425ee860b88e3f8e436b83aa01fee.svg"
              alt="chats"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
