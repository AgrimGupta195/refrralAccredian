import React, { useState } from "react";
import referDesktop from "../assets/refer.svg";
import referMobile from "../assets/vertical.svg";
import Modal from "./Modal";
const Refer = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="flex flex-col gap-5 sm:gap-3 bg-[#EEF5FF] py-5">
            <h2 className="text-2xl text-center md:text-3xl font-semibold text-gray-800">
                How Do I <span className="text-blue-600">Refer?</span>
            </h2>
            <div className="flex justify-center">
                <img src={referMobile} alt="" className="w-4/5 md:hidden" />
                <img src={referDesktop} alt="" className="hidden md:block w-2/3" />
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
                <button
                    onClick={() => setOpen(true)}
                    className="px-[60px] py-5 bg-blue-600 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition duration-300"
                >
                    Refer Now
                </button>
            </div>
            {open && <Modal isOpen={open} onClose={() => setOpen(false)} />}
        </section>
    );
};

export default Refer;
