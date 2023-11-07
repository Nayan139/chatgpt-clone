"use client";
import { Dispatch, SetStateAction, createContext } from "react";

export interface MessageContextProps {
  messsages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  fetchMessages: (chatId: string) => void;
}

const MessafeContext = createContext<MessageContextProps | null>(null);

export default MessafeContext;
