import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../assets/img/Herosectionimg.svg";
import StartedBtn from "../../components/Button/StartedBtn";
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaServer } from "react-icons/fa6";

function Home() {
  return (
    <MainLayout>
      <div className="w-full grid md:flex md:justify-between items-center md:mt-20 mt-10">
        <div className="w-full">
          <div className="w-full">
            <h1 className="xl:text-[70px] text-[40px] xl:leading-[70px] leading-[50px] font-semibold text-[#0B132A]">
              Want anything to be easy with <b>LaslesVPN.</b>
            </h1>
            <p className="xl:text-[22px] text-sm xl:leading-8 leading-5 mt-5">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <div className="xl:mt-14 mt-7">
              <StartedBtn>Get Started</StartedBtn>
            </div>
          </div>
        </div>
        <div className="w-full xl:my-0 my-14">
          <img className="w-full" src={Hero} alt="" />
        </div>
      </div>

      <div className="w-full rounded-xl md:flex grid md:justify-between justify-center items-center md:mt-32 mt-8 shadow-[0_10px_5px_rgba(0,0,0,0.3)] ">
        <div className="w-full flex justify-center gap-5 py-20 md:border-r h-1 items-center">
          <div className="rounded-full p-5 bg-[#FFECEC]">
            <FaUser color="#F53838" />
          </div>
          <div className="">
            <p className="font-bold text-2xl">90+</p>
            <p className="text-[#4F5665] text-xl">Users</p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 py-20 items-center">
          <div className="rounded-full p-5 bg-[#FFECEC]">
            <FaLocationDot color="#F53838" />
          </div>
          <div>
            <p className="font-bold text-2xl">30+</p>
            <p className="text-[#4F5665] text-xl">Locations</p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 py-20 md:border-l h-1 items-center">
          <div className="rounded-full p-5 bg-[#FFECEC]">
            <FaServer color="#F53838" />
          </div>
          <div>
            <p className="font-bold text-2xl">50+</p>
            <p className="text-[#4F5665] text-xl">Servers</p>
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </MainLayout>
  );
}

export default Home;
