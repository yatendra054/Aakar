import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5 px-10 text-white flex justify-between relative">
      <button className="bg-[#0582FF] text-white px-4 py-2 rounded-3xl w-[100px]">
        Login
      </button>
      <div className="flex space-x-4 w-[40%] gap-[4.3rem]">
        <button className=" w-24 px-6 py-2 bg-[#EDDBDB] text-black font-semibold rounded-3xl">
          Layout
        </button>
        <button className="w-24 px-5 py-2 bg-[#EDDBDB] text-black font-semibold rounded-3xl">Teams</button>
        <button className="w-24 px-5 py-2 bg-[#EDDBDB] text-black font-semibold rounded-3xl">Bin</button>
        <div className="flex items-center justify-center">
          <img
            src={assets.logo_white}
            alt="Aakar Logo"
            className="w-[2.5rem] h-[3.5rem] z-1 absolute"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
