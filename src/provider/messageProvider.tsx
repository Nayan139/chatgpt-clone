"use client";
import MessafeContext, { MessageContextProps } from "@/context/messageContext";
import { db } from "@/firebase";
import useSession from "@/hooks/useSession";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";

type MessageProviderProps = { children: React.ReactNode };

const MessageProvider = ({ children }: MessageProviderProps) => {
  //States
  const [messsages, setMessages] = useState<Message[]>([]);
  const [chatID, setChatID] = useState<string>("");
  //Hooks
  const { session } = useSession();

  const fetchMessages = async (chatId: string = "") => {
    try {
      setMessages([]);
      const querySnapshot = await getDocs(
        query(
          collection(
            db,
            "users",
            session?.user?.email!,
            "chats",
            chatId,
            "messages"
          ),
          orderBy("createdAt", "asc")
        )
      );
      querySnapshot.forEach((doc) => {
        const newMessage = { ...(doc.data() as Message) };
        setMessages((prevChat) => {
          const existingIndex = prevChat.findIndex(
            (message) => message.id === newMessage.id
          );
          return existingIndex !== -1
            ? [
                ...prevChat.slice(0, existingIndex),
                newMessage,
                ...prevChat.slice(existingIndex + 1),
              ]
            : [...prevChat, newMessage];
        });
      });
    } catch (error) {
      console.error("error :>> ", error);
    }
  };

  //   /**
  //    * Call on the component mount
  //    */
  useEffect(() => {
    if (session?.user?.email) fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatID]);
  const messageContextValue: MessageContextProps = {
    messsages,
    setMessages,
    fetchMessages,
    chatID,
    setChatID,
  };
  return (
    <MessafeContext.Provider value={messageContextValue}>
      {children}
    </MessafeContext.Provider>
  );
};

export default MessageProvider;
