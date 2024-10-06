import React from "react";
import { assets } from "../assets/assets";

const FeaturesSection = () => {
  return (
    <section className="p-10 px-28 font-[Outfit]">
      <h2 className="text-6xl font-medium mb-16 max-w-[600px]">Everything you need to do your best work.</h2>
      
      {/* Apply justify-items-start to align items to the start of each grid cell */}
      <div className="grid grid-cols-2 gap-20 justify-items-startrelative">
        {/* Feature - Docs */}
        <div className="flex flex-col items-start">
          <img src={assets.page_icon} alt="Docs" className="w-[9rem] h-[10rem] mb-4" />
          <h3 className="text-5xl font-medium">Docs <img src={assets.right_arrow} className="w-9 m-0 p-0 inline-block opacity-[0.6]" alt="" /></h3>
          <p className="text-gray-600 mt-2 text-[26px] w-[24rem]">Build any page, communicate any idea.</p>
        </div>

        {/* Feature - Wiki */}
        <div className="flex flex-col items-start">
          <img src={assets.book_icon} alt="Wiki" className="w-[10rem] h-[10rem] mb-4" />
          <h3 className="text-5xl font-medium">Wiki <img src={assets.right_arrow} className="w-9 m-0 p-0 inline-block opacity-[0.6]" alt="" /></h3>
          <p className="text-gray-600 mt-2 text-[26px] w-[24rem]">One base knowledge for all your knowledge.</p>
        </div>

        {/* Feature - Calendar */}
        <div className="flex flex-col items-start">
          <img src={assets.calendar_icon} alt="Calendar" className="w-[10rem] h-[10rem] mb-4" />
          <h3 className="text-5xl font-medium">Calendar  <img src={assets.right_arrow} className="w-9 m-0 p-0 inline-block opacity-[0.6]" alt="" /></h3>
          <p className="text-gray-600 mt-2 text-[26px] w-[24rem]">See all your commitments in one place.</p>
        </div>

        {/* Feature - Goals */}
        <div className="flex flex-col items-start">
          <img src={assets.goal_icon} alt="Goals" className="w-[10rem] h-[10rem] mb-4" />
          <h3 className="text-5xl font-medium">Goals <img src={assets.right_arrow} className="w-9 m-0 p-0 inline-block opacity-[0.6]" alt="" /></h3>
          <p className="text-gray-600 mt-2 text-[26px] w-[24rem]">Track progress toward your most important goals.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
