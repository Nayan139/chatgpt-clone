"use client";
import React from "react";
import { ChatProps } from "@/types/components/ChatPage";

const Chat = ({ chatId }: ChatProps) => {
  return <div className="flex-1">Chat {chatId}</div>;
};

export default Chat;
