"use client";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import Chat from "@/components/Chat";
import ChatInput from "@/components/coreUI/ChatInput";
import { ChatPageProps } from "@/types/components/ChatPage";
import { toast } from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import useSession from "@/hooks/useSession";
import MessafeContext from "@/context/messageContext";
import { uuid } from "uuidv4";

const ChatPage = ({ params: { id } }: ChatPageProps) => {
  //hooks
  const { session } = useSession();
  //TODO
  const messsages = useContext(MessafeContext);

  //state
  const [value, setvalue] = useState<string>("");

  //TODO useSWR get model
  const model = "text-davinci-003";

  // useEffect(() => {
  //   messsages?.fetchMessages(id);
  // }, [messsages, id]);

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
        id: uuid(),
        text: input,
        createdAt: serverTimestamp(),
        user: {
          _id: session && session?.user?.email,
          name: session && session?.user?.name,
          avatar: session && session?.user?.image,
        },
      };

      await addDoc(
        collection(db, "users", session?.user?.email!, "chats", id, "messages"),
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
        body: JSON.stringify({ prompt: input, chatId: id, model, session }),
      });

      if (response) {
        toast.success("ChatGPT has responded!", {
          id: notification,
        });
        messsages?.fetchMessages(id);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went to wrong!!!");
    }
  };

  console.log(
    "messsagesmesssagesmesssagesmesssages :>> ",
    messsages?.messsages
  );
  return (
    <div className="h-screen flex flex-col overflow-hidden p-4">
      {/* Chat */}
      <Chat chatId={id} messages={messsages?.messsages} />
      {/* ChatInput */}
      <ChatInput
        chatId={id}
        handlSubmit={handlSubmit}
        session={session}
        value={value}
        setvalue={setvalue}
      />
    </div>
  );
};

export default ChatPage;
