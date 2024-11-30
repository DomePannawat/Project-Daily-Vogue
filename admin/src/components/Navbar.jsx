import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <img className="w-[max(8%,80px)]" src={assets.logo} />
      <p className="flex justify-center text-2xl font-medium text-gray-600 sm:text-xl px-5 py-2 sm:px-7 sm:py-2 ">
        Admin Panel
      </p>
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
