"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import NewChat from "@/components/NewChat";
import Profile from "@/components/Profile";
import useChat from "@/hooks/useChat";

type Props = {};

const Sidebar = (props: Props) => {
  //hooks
  const { chats, fetchChats } = useChat();

  useEffect(() => {
    fetchChats;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>
            {/* Model Selecttion */}
            Sidebar goes here
          </div>
          {/* Map through the chat rows */}
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
