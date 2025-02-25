import { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";

const Bar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="z-50 fixed w-full shadow-lg bg-white">
      <div className="w-full h-auto flex flex-row justify-center bg-[#ddeafc] px-6 py-2 gap-6">
        <div className="font-medium text-black text-[14px] sm:text-[16px] text-center sm:text-left">
          Navigate your ideal career path with tailored expert advice
        </div>
        <div className="font-medium text-[#1a73e8] text-[14px] sm:text-[16px] whitespace-nowrap">
          Contact Expert
        </div>
      </div>
      <div className="w-full bg-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
              <span>Courses</span>
              <FaAngleDown />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-gray-700">Refer & Earn</span>
            <span className="text-gray-700">Resources</span>
            <span className="text-gray-700">About Us</span>
            <button className="px-4 py-2 border border-gray-700 rounded-md text-gray-700 shadow-md">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:text-gray-100">
              Try for free
            </button>
          </div>
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white py-4 border-t border-gray-300">
            <span className="py-2 text-gray-700">Refer & Earn</span>
            <span className="py-2 text-gray-700">Resources</span>
            <span className="py-2 text-gray-700">About Us</span>
            <button className="px-4 py-2 border border-gray-700 rounded-md text-gray-700 shadow-md w-32">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md w-32 mt-2">
              Try for free
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bar;
