"use client";
import React, { useEffect } from "react";
import NewChat from "@/components/NewChat";
import Profile from "@/components/Profile";
import useChat from "@/hooks/useChat";
import ChatRow from "@/components/ChatRow";
import ModelSelection from "@/components/ModelSelection";

type Props = {};

const Sidebar = (props: Props) => {
  //hooks
  const { chats, fetchChats } = useChat();
  useEffect(() => {
    fetchChats;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chats]);

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          {/* Map through the chat rows */}
          {chats?.length
            ? chats.map((chat: string, index: number) => (
                <ChatRow id={chat} key={index} />
              ))
            : null}
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
