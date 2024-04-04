import React, { useState } from "react";
import Lvpn from "../../assets/images/Lvpn.svg";
import SignupBtn from "../Button/SignupBtn";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center">
        <img className="h-10" src={Lvpn} alt="website logo" />
      </div>
      <div className="hidden md:flex justify-between items-center gap-10">
        <p className="cursor-pointer text-[#4F5665]">About</p>
        <p className="cursor-pointer text-[#4F5665]">Features</p>
        <p className="cursor-pointer text-[#4F5665]">Pricing</p>
        <p className="cursor-pointer text-[#4F5665]">Testimonials</p>
        <p className="cursor-pointer text-[#4F5665]">Help</p>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <p className="cursor-pointer text-[#0B132A] font-medium text-base">
          Sign in
        </p>
        <SignupBtn>Sign Up</SignupBtn>
      </div>
      <div onClick={toggleNav} className="md:hidden cursor-pointer">
        {nav ? (
          <IoClose size={30} color="#F53855" />
        ) : (
          <IoMenu size={35} color="#F53855" />
        )}
      </div>
      <div
        className={`${
          nav
            ? "fixed left-0 top-0 w-[88%] h-screen bg-[#FFECEC] ease-in-out duration-500 z-20"
            : "fixed left-[-100%]"
        } md:hidden`}
      >
        <div className="flex flex-col justify-center items-center mt-8">
          <img className="h-10 mb-8" src={Lvpn} alt="website logo" />
          <div className="flex flex-col items-center gap-6 mb-8">
            <p className="cursor-pointer text-[#F53855]">About</p>
            <p className="cursor-pointer text-[#F53855]">Features</p>
            <p className="cursor-pointer text-[#F53855]">Pricing</p>
            <p className="cursor-pointer text-[#F53855]">Testimonials</p>
            <p className="cursor-pointer text-[#F53855]">Help</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="cursor-pointer text-[#F53855] font-medium text-base">
              Sign in
            </p>
            <SignupBtn>Sign Up</SignupBtn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
