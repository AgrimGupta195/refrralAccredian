import React, { useState } from "react";
import { LuDot } from "react-icons/lu";

const Navbar = () => {
  const [active, setActive] = useState("refer");

  const handleScroll = (e, id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center px-4 pt-[150px] sm:pt-[220px] md:pt-[22vh]">
      <div className="bg-[#ddeafc] flex w-full max-w-lg rounded-[50px] text-gray-600 px-2 sm:px-6 py-2 justify-between items-center overflow-hidden">
        {["refer", "benefits", "faqs", "support"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => handleScroll(e, item)}
            className={`relative cursor-pointer px-3 sm:px-4 py-1 transition-all ${
              active === item ? "text-[#1a73e8] font-semibold" : ""
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            {active === item && (
              <LuDot className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-[#1a73e8]" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
