"use client";

import React, { useState } from "react";

import { FaMoon } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../global/slice";

const Header = () => {
  //   const [toggle, setToggle] = useState<boolean>(false);

  //   const handleToggle = () => {
  //     setToggle(!toggle);
  //   };
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.mode);

  return (
    <div>
      <div className="w-full flex justify-end">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center
            ${
              toggle ? "text-white hover:text-black " : "text-black "
            } hover:bg-slate-200
             transition-all duration-300 cursor-pointer`}
          onClick={() => {
            dispatch(toggleMode());
          }}
        >
          {toggle ? <FaMoon size={20} /> : <IoMdSunny size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
