import React, { useState } from "react";
import { IoToggle } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { GraduationCap } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import Modal from "./Modal";
const Table = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-5xl mx-auto hidden sm:block bg-white p-6" id="benefits">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex justify-center gap-1">
        What Are The <span className="text-[#1a73e8]">Referral Benefits?</span>
      </h2>
      <div className="flex flex-row justify-end gap-4 mb-6">
        <span className="text-gray-700">Enrolled</span>
        <IoToggle className="text-2xl text-blue-600 cursor-pointer" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <tbody>
              {[
                "All Programs",
                "Product Management",
                "Strategy & Leadership",
                "Business Management",
                "Fintech",
                "Senior Management",
                "Data Science",
                "Digital Transformation",
                "Business Analytics",
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 hover:bg-gray-100"
                >
                  <td className="py-3 px-4 text-[#3c4852]">{item}</td>
                  <td className="py-3 px-4 text-right text-[#3c4852]">
                    <FaAngleRight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#f8fbff] rounded-lg shadow-md overflow-hidden">
          <table className="w-full border-collapse rounded-lg">
            <thead>
              <tr className="bg-[#aecdf6] border border-gray-300">
                <th className="py-4 px-4 text-left text-[#1350a0]">Programs</th>
                <th className="py-4 px-4 text-center text-[#1350a0] border-l border-gray-300">
                  Referrer Bonus
                </th>
                <th className="py-4 px-4 text-center text-[#1350a0] border-l border-gray-300">
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Professional Certificate Program in Product Management",
                "PG Certificate Program in Strategic Product Management",
                "Executive Program in Data Driven Product Management",
                "Executive Program in Product Management and Digital Transformation",
                "Executive Program in Product Management",
                "Advanced Certification in Product Management",
                "Executive Program in Product Management and Project Management",
              ].map((program, index) => (
                <tr key={index}>
                  <td className="py-4 px-4 flex items-center gap-2 text-gray-800">
                    <GraduationCap className="text-blue-600 w-5 h-5 shrink-0" />
                    <span className="flex-1">{program}</span>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700 border-l border-gray-300">
                    ₹ 7,000
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700 border-l border-gray-300">
                    ₹ 9,000
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end">
  <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 text-gray-400 rounded-md mt-5 hover:bg-gray-100 transition">
    <span>Show More</span>
    <FaAngleDown />
  </button>
</div>
<div className="flex items-center justify-center gap-3 mt-3">
            <button onClick={() => setOpen(true)} className="px-[60px] py-5 bg-blue-600 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition duration-300">
              Refer Now
            </button>
          </div>
          {open && <Modal isOpen={open} onClose={() => setOpen(false)} />}



    </div>
  );
};

export default Table;
