import React from "react";

type StartedBtnProps = {
  children: React.ReactNode;
};

function StartedBtn(props: StartedBtnProps) {
  return (
    <button className="bg-[#F53838] text-white border border-[#F53855] text-base font-bold xl:py-5 xl:px-32 py-2 px-6 rounded-md shadow-2xl shadow-[#F53838]">
      {props.children}
    </button>
  );
}

export default StartedBtn;
