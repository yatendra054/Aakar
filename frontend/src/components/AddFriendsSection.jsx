import React from "react";
import { assets } from "../assets/assets";  // Assuming your assets are imported

const AddFriendsSection = () => {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.collaborative_bg})`,
          opacity: "0.4", // Setting opacity for the background image
        }}
      ></div>

      {/* Text and Button (unaffected by background image opacity) */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-normal text-black mb-6 w-[60rem]">
          Convert Your Ideas Into Reality with your friends together
        </h2>
        <button className="bg-gray-300 hover:bg-gray-400 text-[#0C4476] hover:text-blue-800 font-semibold text-[1.5rem] py-3 px-8 rounded-xl">
          Share Your Friends
        </button>
      </div>
    </section>
  );
};

export default AddFriendsSection;
