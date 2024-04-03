import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../assets/img/Herosectionimg.svg";
import StartedBtn from "../../components/Button/StartedBtn";

function Home() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mt-20">
        <div>
          <h1>Want anything to be easy with LaslesVPN.</h1>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <StartedBtn>Get Started</StartedBtn>
        </div>
        <div>
          <img src={Hero} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
