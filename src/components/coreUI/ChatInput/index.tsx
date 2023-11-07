"use client";
import { ChatInputProps } from "@/types/components/ChatPage";
import React from "react";
import Input from "../Input";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatInput = ({
  handlSubmit,
  session,
  value,
  setvalue,
}: ChatInputProps) => {
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form onSubmit={handlSubmit} className="p-5 space-x-5 flex">
        <Input
          type="type"
          value={value}
          onChange={(value: string) => setvalue(value)}
          disabled={!session}
          placeholder="Type your message here..."
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed  disabled:text-gray-300"
        />
        <button
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!value || !session}
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* ModelSelction */}</div>
    </div>
  );
};

export default ChatInput;
