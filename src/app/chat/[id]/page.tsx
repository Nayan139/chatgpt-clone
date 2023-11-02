import React from "react";
import Chat from "@/components/Chat";
import ChatInput from "@/components/coreUI/ChatInput";
import { ChatPageProps } from "@/types/components/ChatPage";

const ChatPage = ({ params: { id } }: ChatPageProps) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden p-4">
      {/* Chat */}
      <Chat chatId={id} />
      {/* ChatInput */}
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
