import React from "react";

type SelectBtnProps = {
  children: React.ReactNode;
};

function SelectBtn(props: SelectBtnProps) {
  return (
    <button
      type="button"
      className="bg-white hover:bg-[#F53855] hover:text-white text-[#F53855] border border-[#F53855] text-base font-normal py-2 px-7 rounded-full"
    >
      {props.children}
    </button>
  );
}

export default SelectBtn;
