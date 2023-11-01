import { Dispatch, SetStateAction, createContext } from "react";

export interface ChatContextProps {
  chats: string[];
  setChats:Dispatch<SetStateAction<string[]>>

  fetchChats: (callback?: () => void) => void;
}

const ChatContext = createContext<ChatContextProps | null>(null);

export default ChatContext;
