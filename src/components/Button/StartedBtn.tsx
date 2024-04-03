import React from "react";

type StartedBtnProps = {
  children: React.ReactNode;
};

function StartedBtn(props: StartedBtnProps) {
  return (
    <button className="bg-[#F53838] hover:bg-[#F53855] hover:text-white text-white border border-[#F53855] text-base font-normal py-2 px-7 rounded-md">
      {props.children}
    </button>
  );
}

export default StartedBtn;
