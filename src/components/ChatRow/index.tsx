import React from "react";
import { ChatRowProps } from "@/types/components/ChatRow/index";
import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

const ChatRow = ({ id }: ChatRowProps) => {
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center mt-2`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate"> New Chat</p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
};

export default ChatRow;
