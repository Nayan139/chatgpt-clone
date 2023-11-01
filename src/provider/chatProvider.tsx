"use client";
import React, { useCallback, useEffect, useState } from "react";
import ChatContext from "@/context/chatContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { ChatContextProps } from "@/context/chatContext";
import useSession from "@/hooks/useSession";

type ChatProviderProps = { children: React.ReactNode };

const ChatProvider = ({ children }: ChatProviderProps) => {
  //States
  const [chats, setChats] = useState<string[]>([]);
  //Hooks
  const { session } = useSession();

  /**
   * This method is used for the getchatid from the firestore
   * */
  const fetchChats = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", session?.user?.email!, "chats")
      );
      querySnapshot.forEach((doc) => {
        setChats((prevChat) => [...prevChat, doc.id]);
      });
    } catch (error) {
      console.error("error :>> ", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.email]);

  /**
   * Call on the component mount
   */
  useEffect(() => {
    if (session?.user?.email) fetchChats();
  }, [fetchChats, session?.user?.email]);

  const chatContextValue: ChatContextProps = {
    chats,
    fetchChats,
  };
  return (
    <ChatContext.Provider value={chatContextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
