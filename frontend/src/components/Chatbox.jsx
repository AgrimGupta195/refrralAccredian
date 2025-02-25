import React from "react";
import { PiChatTextFill } from "react-icons/pi";

const ChatButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center bg-white rounded-full hover:scale-105 transition duration-300 shadow-lg"
      onClick={() => alert("Chat feature coming soon!")}
    >
      <PiChatTextFill className="size-10 text-blue-600" />
    </button>
  );
};

export default ChatButton;
