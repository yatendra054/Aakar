import React from "react";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <section className="p-10 bg-gray-100 flex gap-[10rem] items-center px-28">
      <div className="w-[50%]">
        <h1 className="text-7xl font-light"><span className="font-bold text-[110px]">S</span>hape your ideas with <span className="text-black font-extrabold text-[100px] border-b-4 border-black">Aakar</span></h1>
        <p className="text-gray-700 mt-10 text-xl">
          Aakar is a powerful and intuitive note-taking platform designed for students, teachers, and professionals.
        </p>
      </div>
      <div>
        <img src={assets.teacher_bg} alt="Man working" className="h-[420px] rounded-md" />
      </div>
    </section>
  );
};

export default HeroSection;
