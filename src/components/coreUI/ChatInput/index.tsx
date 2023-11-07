"use client";
import React, { FormEvent, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ChatInputProps } from "@/types/components/ChatPage";
import Input from "@/components/coreUI/Input";
import useSession from "@/hooks/useSession";
import { db } from "@/firebase";

const ChatInput = ({ chatId }: ChatInputProps) => {
  //hooks
  const { session } = useSession();
  //state
  const [value, setvalue] = useState<string>("");
  console.log("value :session>> ", value, session);

  //TODO useSWR get model
  const model = "text-davinci-003";

  /**
   * This method is using for the submit the question to the openAI
   */
  const handlSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!value) return;

      const input = value;
      setvalue("");

      const message: Message = {
        text: input,
        createdAt: serverTimestamp(),
        user: {
          _id: session && session?.user?.email,
          name: session && session?.user?.name,
          avatar: session && session?.user?.image,
        },
      };

      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        message
      );

      //Toast notification
      const notification = toast.success("ChatGPT is thinking...");

      //Sever API
      const response = await fetch("/api/askQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input, chatId, model, session }),
      });

      if (response) {
        toast.success("ChatGPT has responded!", {
          id: notification,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form onSubmit={handlSubmit} className="p-5 space-x-5 flex">
        <Input
          type="type"
          value={value}
          onChange={(value: string) => setvalue(value)}
          disabled={!session}
          placeholder="Type your message here..."
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed  disabled:text-gray-300"
        />
        <button
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!value || !session}
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* ModelSelction */}</div>
    </div>
  );
};

export default ChatInput;
