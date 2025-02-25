import React from 'react';
import { ChevronRight, Headphones } from 'lucide-react';

const ContactBanner = () => {
  return (
    <div className="hidden md:block max-w-6xl mx-auto p-4" id="support">
      <div className="relative w-full bg-blue-500 rounded-xl overflow-hidden p-6">
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute rounded-full bg-blue-400 w-full h-full scale-150 -top-1/2 left-1/4"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-full">
            <div className="absolute rounded-full bg-blue-400 w-full h-full scale-150 -bottom-1/2 left-1/3"></div>
          </div>
        </div>
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-lg mr-4">
              <Headphones className="text-blue-500 h-6 w-6" />
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-xl md:text-2xl mb-1">
                Want to delve deeper into the program?
              </h3>
              <p className="text-sm text-blue-100">
                Share your details to receive expert insights from our program team!
              </p>
            </div>
          </div>
          <button className="bg-white text-blue-500 px-5 py-3 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-colors whitespace-nowrap">
            Get in touch
            <ChevronRight className="ml-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
