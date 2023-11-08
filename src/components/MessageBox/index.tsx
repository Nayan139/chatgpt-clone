"use client";
import React from "react";
import { MessageBoxProps } from "@/types/components/MessageBox";
import Images from "../coreUI/Image";
import { UserType } from "@/enum";

const MessageBox = ({ message }: MessageBoxProps) => {
  const isChatGPT: Boolean = Boolean(message?.user?.name === UserType.ChatGPT);
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"} `}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <Images src={message?.user?.avatar!} alt="avatar" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageBox;
