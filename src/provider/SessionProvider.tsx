"use client";
import { SessionProvider as Provider } from "next-auth/react";
import { SessionProviderProps } from "@/types/provider/SessionProvider";

const SessionProvider = ({ children, session }: SessionProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
