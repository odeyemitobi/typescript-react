import React from "react";
import Lvpn from "../../assets/images/Lvpn.svg";
import SignupBtn from "../Button/SignupBtn";

function NavBar() {
  return (
    <div className="flex justify-between">
      <div className=" items-center">
        <img className="h-10" src={Lvpn} alt="website logo" />
      </div>
      <div className="flex justify-between items-center gap-6">
        <p className="cursor-pointer text-[#4F5665]">About</p>
        <p className="cursor-pointer text-[#4F5665]">Features</p>
        <p className="cursor-pointer text-[#4F5665]">Pricing</p>
        <p className="cursor-pointer text-[#4F5665]">Testimonials</p>
        <p className="cursor-pointer text-[#4F5665]">Help</p>
      </div>
      <div className="flex items-center gap-6">
        <p className="cursor-pointer text-[#0B132A] font-medium text-base">
          Sign in
        </p>
        <SignupBtn>Sign Up</SignupBtn>
      </div>
    </div>
  );
}

export default NavBar;
