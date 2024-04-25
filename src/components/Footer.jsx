import React from "react";
import { Link } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[#00838f] text-white w-full">
      <div
        className="w-[90%] flex flex-col items-center py-10
       mx-auto gap-8 sm:flex-row sm:items-start  sm:justify-between"
      >
        {/* logo */}
        <div className="flex-col flex items-center justify-center gap-3">
          <div>
            <img
              src="https://putatoe.com/static/media/logo.aa9da4f6375a03f8abbe.png"
              alt="logo"
            />
          </div>
          <h2 className="text-xl font-semibold">Putatoe</h2>
          <span className="text-xs font-semibold">version 12.0.0</span>
        </div>

        {/* 2nd */}
        <div className="flex flex-col justify-center items-start gap-1">
          <h3 className="text-xl font-bold">USEFUL LinkS</h3>
          <Link to={"#"} className="font-semibold">
            Recharge & Payments
          </Link>
          <Link to={"#"} className="font-semibold">
            Jobs & Internships
          </Link>
          <Link to={"#"} className="font-semibold">
            Blog Posts
          </Link>
          <Link to={"#"} className="font-semibold">
            Promotions
          </Link>
          <Link to={"#"} className="font-semibold">
            Loans
          </Link>
        </div>

        {/* 3rd */}
        <div className="flex flex-col justify-center items-start gap-1">
          <h3 className="text-xl font-bold">ABOUT PUTATOE</h3>
          <Link to={"#"} className="font-semibold">
            About us
          </Link>
          <Link to={"#"} className="font-semibold">
            Contact us
          </Link>
          <Link to={"#"} className="font-semibold">
            Terms and conditions
          </Link>
        </div>

        {/* 4th */}
        <div className="flex flex-col justify-center items-start gap-1">
          <h3 className="text-xl font-bold">POPULAR SEARCHES</h3>
          <Link to={"#"} className="font-semibold">
            Grocery
          </Link>
          <Link to={"#"} className="font-semibold">
            Construction
          </Link>
          <Link to={"#"} className="font-semibold">
            Daily needs
          </Link>
          <Link to={"#"} className="font-semibold">
            Courier Service
          </Link>
          <Link to={"#"} className="font-semibold">
            Education
          </Link>
          <Link to={"#"} className="font-semibold">
            Laundry service
          </Link>
        </div>

        {/* 5th */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="text-xl font-bold">CONNECT WITH US</h3>
          <div className="flex gap-3 text-4xl">
            <TiSocialFacebook className="rounded-full text-blue-800 p-1 bg-white flex items-center justify-center" />
            <TiSocialLinkedin className="rounded-full text-blue-700 p-1 bg-white flex items-center justify-center" />
            <TiSocialInstagram className="rounded-full text-pink-500 p-1 bg-white flex items-center justify-center" />
          </div>
          <p>GET OUR APP</p>
          <span className="w-36 -ml-3">
            <img
              src="https://putatoe.com/static/media/playstore.f902960a94878ee0da67.png"
              alt="google play"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
