import { Session } from "next-auth";
import { FormEvent } from "react";

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export interface ChatProps {
  chatId: string;
  messages: Message[] | undefined | null;
}

export interface ChatInputProps {
  chatId?: string;
  handlSubmit: (e: FormEvent<HTMLFormElement>) => void;
  session: Session | null;
  value: string;
  setvalue: (value: string) => void;
}
