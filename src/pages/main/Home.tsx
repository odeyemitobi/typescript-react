import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../assets/img/Herosectionimg.svg";
import Lap from "../../assets/img/Herolaptopimg.png";
import Plan from "../../assets/img/Plan1.png";
import Standard from "../../assets/img/Standard.png";
import Premium from "../../assets/img/Premium.png";
import StartedBtn from "../../components/Button/StartedBtn";
import { FaUser, FaCheckCircle } from "react-icons/fa";
import { FaLocationDot, FaServer, FaCheck } from "react-icons/fa6";
import SelectBtn from "../../components/Button/SelectBtn";

function Home() {
  return (
    <MainLayout>
      <div className="w-full grid md:flex md:justify-between items-center md:my-20 my-10">
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

      <div className="w-full rounded-xl md:flex grid md:justify-between justify-center items-center md:my-48 my-8 shadow-[0_10px_5px_rgba(0,0,0,0.3)]">
        <div className="w-full flex justify-center gap-5 md:py-20 py-10 md:border-r md:border-r-[#E0E0E0] h-1 items-center">
          <div className="rounded-full p-5 bg-[#FFECEC]">
            <FaUser color="#F53838" />
          </div>
          <div className="">
            <p className="font-bold text-xl md:text-2xl">90+</p>
            <p className="text-[#4F5665] text-lg md:text-xl">Users</p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 md:py-20 py-10 items-center">
          <div className="rounded-full p-5 bg-[#FFECEC]">
            <FaLocationDot color="#F53838" />
          </div>
          <div>
            <p className="font-bold text-xl md:text-2xl">30+</p>
            <p className="text-[#4F5665] text-lg md:text-xl">Locations</p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-5 md:py-20 py-10 md:border-l md:border-l-[#E0E0E0] h-1 items-center">
          <div className="rounded-full p-5 bg-[#FFECEC]">
            <FaServer color="#F53838" />
          </div>
          <div className="">
            <p className="font-bold text-xl md:text-2xl">50+</p>
            <p className="text-[#4F5665] text-lg md:text-xl">Servers</p>
          </div>
        </div>
      </div>

      <div className="w-full md:flex grid md:justify-between justify-center md:my-40 my-10">
        <div className="w-full">
          <img className="w-full" src={Lap} alt="" />
        </div>
        <div className="w-full flex flex-col md:mt-28 mt-6 items-end">
          <div className="w-[80%] my-10">
            <h1 className="font-medium text-[40px] leading-[50px]">
              We Provide Many <br />
              Features You Can Use
            </h1>
            <p className="text-[20px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <div className="">
              <div className="flex items-center space-x-4 my-6">
                <div>
                  <FaCheckCircle color="#2FAB73" size={25} />
                </div>
                <p>Powerful online protection.</p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <div>
                  <FaCheckCircle color="#2FAB73" size={25} />
                </div>
                <p>Internet without borders.</p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <div>
                  <FaCheckCircle color="#2FAB73" size={25} />
                </div>
                <p>Supercharged VPN</p>
              </div>
              <div className="flex items-center gap-4 my-6">
                <div>
                  <FaCheckCircle color="#2FAB73" size={25} />
                </div>
                <p>No specific time limits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:my-48 my-10">
        <div className="text-center items-center">
          <h1 className="md:mb-10 mb-5 md:text-4xl text-3xl text-[#0B132A] font-medium ">
            Choose Your Plan
          </h1>
          <p className="md:text-xl text-sm text-[#4F5665]">
            Let's choose the package that is best for you and explore it happily
            and <br />
            cheerfully.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 items-center justify-center text-center md:my-28 my-8">
          <div className="w-[90%] border-2 rounded-lg items-center justify-center">
            <div>
              <img
                className="mx-auto md:h-[16rem] md:mt-24 mt-6"
                src={Plan}
                alt=""
              />
            </div>
            <p className="text-[30px] md:my-8 my-4 font-medium">Free Plan</p>
            <div className="text-center mb-56">
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>No Traffic Logs</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Works on All Devices</p>
              </div>
            </div>
            <div className="mb-5">
              <p>Free</p>
            </div>
            <div className="mb-10">
              <SelectBtn>Select</SelectBtn>
            </div>
          </div>
          <div className="w-[90%] border-2 rounded-lg place-items-center justify-center">
            <img
              className="mx-auto md:h-[16rem] md:mt-24 mt-6"
              src={Standard}
              alt=""
            />
            <p className="text-[30px] md:my-8 my-4 font-medium">Free Plan</p>
            <div className="w-full flex flex-col items-center mb-56">
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Yes Traffic Logs</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Works on All Devices</p>
              </div>
              <div className="flex gap-5 items-center">
                <FaCheck color="#2FAB73" />
                <p>Connect Anyware</p>
              </div>
            </div>
            <div className="mb-5">
              <p>$9 / mo</p>
            </div>
            <div className="mb-10">
              <SelectBtn>Select</SelectBtn>
            </div>
          </div>
          <div className="w-[90%] border-2 rounded-lg place-items-center justify-center">
            <img
              className="mx-auto md:h-[16rem] md:mt-24 mt-6"
              src={Premium}
              alt=""
            />
            <p className="text-[30px] md:my-8 my-4 font-medium">Free Plan</p>
            <div className="w-full flex flex-col items-center mb-56">
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Encrypted Connection</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>No Traffic Logs</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Works on All Devices</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Connect Anyware</p>
              </div>
              <div className="flex gap-5 my-4 items-center">
                <FaCheck color="#2FAB73" />
                <p>Get New Features</p>
              </div>
            </div>
            <div className="mb-5">
              <p>$12 / mo</p>
            </div>
            <div className="mb-10">
              <SelectBtn>Select</SelectBtn>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
