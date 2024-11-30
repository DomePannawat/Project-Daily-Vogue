import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <p className="prata-regular text-xl font-medium mb-5">DAILY VOGUE</p>
          <ul className="flex flex-col gap-1">
            <p className="w-full md:w-2/3 text-gray-500">
              " DAILY VOGUE " Timeless everyday fashion crafted for everyone,
              blending elegance and versatility in every detail .
            </p>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>02-1234-5678</li>
            <li>daily_vogue@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ daily-vogue.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
