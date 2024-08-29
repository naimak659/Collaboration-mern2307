import React from "react";

const Button = ({ Content, todo }) => {
  //expect button content and a func to action
  return (
    <>
      <a
        className="py-[15px] px-[42px] bg-[#6A4DF4] cursor-pointer font-inter text-xl font-semibold text-white rounded-[10px] inline-block"
        onClick={todo}
      >
        {Content}
      </a>
    </>
  );
};

export default Button;
