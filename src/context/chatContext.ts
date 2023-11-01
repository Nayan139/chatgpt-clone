import { createContext } from "react";

export interface ChatContextProps {
  chats: string[];
  fetchChats: (callback?: () => void) => void;
}

const ChatContext = createContext<ChatContextProps | null>(null);

export default ChatContext;
