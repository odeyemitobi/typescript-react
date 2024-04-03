import React from "react";

type StartedBtnProps = {
  children: React.ReactNode;
};

function StartedBtn(props: StartedBtnProps) {
  return (
    <button className="bg-[#F53838] text-white border border-[#F53855] text-base font-bold py-3 px-20 rounded-md shadow-2xl shadow-[#F53838]">
      {props.children}
    </button>
  );
}

export default StartedBtn;
