import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-white border-b border-gray-200">
      {/* Hero ฝั่งซ้าย ของ Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 bg-gray-100 rounded-l-lg shadow-lg border border-gray-300">
        <div className="text-[#2D2D2D]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base text-gray-600 uppercase tracking-widest">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="font-serif text-3xl sm:py-3 lg:text-5xl font-bold leading-relaxed text-gray-800">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base text-gray-600">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero ฝั่งขวา */}
      <img
        className="w-full sm:w-1/2 object-cover rounded-r-xl shadow-lg"
        src={assets.hero_img}
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
