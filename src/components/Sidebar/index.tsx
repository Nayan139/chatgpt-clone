"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import NewChat from "@/components/NewChat";
import Profile from "@/components/Profile";
import useChat from "@/hooks/useChat";
import ChatRow from "../ChatRow";

type Props = {};

const Sidebar = (props: Props) => {
  //hooks
  const { chats, fetchChats } = useChat();
  console.log("chats :>> ", chats);
  useEffect(() => {
    fetchChats;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chats]);

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat getFetchChat={() => fetchChats} />
          <div>{/* Model Selecttion */}</div>
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
