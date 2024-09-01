import React from "react";

const Menu = ({ menuItem }) => {
    //expect item array to create menu 
  return (
    <ul className="flex gap-x-[64px] w-[100%]">
      {menuItem.map((item,index) => (
        <li key={index}>
          <a
            href={item.link}
            className="font-inter text-[18px] hover:text-[#6A4DF4] font-bold text-white transition ease-in-out delay-100"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
