import React from "react";
import { ChatProps } from "@/types/components/ChatPage";
import MessageBox from "../MessageBox";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const Chat = ({ chatId, messages }: ChatProps) => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.length ? (
        messages.map((message: Message, index: number) => (
          <MessageBox message={message} key={index} />
        ))
      ) : (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}
    </div>
  );
};

export default Chat;
