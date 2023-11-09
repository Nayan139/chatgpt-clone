"use client";
import MessafeContext, { MessageContextProps } from "@/context/messageContext";
import { db } from "@/firebase";
import useSession from "@/hooks/useSession";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

type MessageProviderProps = { children: React.ReactNode };

const MessageProvider = ({ children }: MessageProviderProps) => {
  //States
  const [messsages, setMessages] = useState<Message[]>([]);
  const [chatID, setChatID] = useState<string>("");
  //Hooks
  // const { session } = useSession();

  const fetchMessages = async (chatId: string = "", email: string = "") => {
    try {
      setMessages([]);
      const querySnapshot = await getDocs(
        query(
          collection(db, "users", email!, "chats", chatId, "messages"),
          orderBy("createdAt", "asc")
        )
      );
      querySnapshot.forEach(
        (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
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
        }
      );
    } catch (error) {
      console.error("error :>> ", error);
    }
  };

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
