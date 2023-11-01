"use client";

import { useContext, useMemo } from "react";
import ChatContext from "../context/chatContext";

function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be within a app");
  }

  return useMemo(() => ({ ...context }), [context]);
}
export default useChat;
