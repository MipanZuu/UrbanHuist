import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/UrbanHuiseLogo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primaryColor text-fourthColor text-center p-4">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <Image
          src={Logo}
          alt="Urban Huis Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-thirdColor transition">
          Home
        </a>
        <a href="#" className="hover:text-thirdColor transition">
          About Us
        </a>
        <a href="#" className="hover:text-thirdColor transition">
          Contact
        </a>
        <a href="#" className="hover:text-thirdColor transition">
          Privacy Policy
        </a>
      </div>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} Urban Huis. All rights reserved.
      </p>
    </footer>
  );
};
