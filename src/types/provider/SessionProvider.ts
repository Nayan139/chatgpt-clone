import { Session } from "next-auth";

export interface SessionProviderProps {
  children: React.ReactNode;
  session: Session | null;
}
