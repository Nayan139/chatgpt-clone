"use client";

import MessafeContext from "@/context/messageContext";
import { useContext, useMemo } from "react";

function useMessage() {
  const context = useContext(MessafeContext);
  if (context === undefined) {
    throw new Error("useMessage must be within a app");
  }

  return useMemo(() => ({ ...context }), [context]);
}
export default useMessage;
