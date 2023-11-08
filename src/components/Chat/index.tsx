"use client";
import React from "react";
import { ChatProps } from "@/types/components/ChatPage";
import MessageBox from "../MessageBox";

const Chat = ({ chatId, messages }: ChatProps) => {
  return (
    <div className="flex-1">
      {messages?.length
        ? messages.map((message: Message, index: number) => (
            <MessageBox message={message} key={index} />
          ))
        : null}
    </div>
  );
};

export default Chat;
