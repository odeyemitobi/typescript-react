import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../assets/img/Herosectionimg.svg";
import StartedBtn from "../../components/Button/StartedBtn";

function Home() {
  return (
    <MainLayout>
      <div className="w-full flex justify-between items-center mt-20">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-[70px] leading-[70px] font-bold text-[#0B132A]">
              Want anything to be easy with LaslesVPN.
            </h1>
            <p className="text-[22px] leading-8 mt-5">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <div className="mt-14">
              <StartedBtn>Get Started</StartedBtn>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src={Hero} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
