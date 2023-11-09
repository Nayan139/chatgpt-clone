"use client";
import { Dispatch, SetStateAction, createContext } from "react";

export interface MessageContextProps {
  messsages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  fetchMessages: (chatId: string, email: string) => void;
  chatID: string;
  setChatID: Dispatch<SetStateAction<string>>;
}

const MessafeContext = createContext<MessageContextProps | null>(null);

export default MessafeContext;
