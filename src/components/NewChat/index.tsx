"use client";
import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { db } from "@/firebase";
import useSession from "@/hooks/useSession";

const NewChat = () => {
  //Hooks
  const router = useRouter();
  const { session } = useSession();

  /**
   * This Method is used for create a userCollection in the Firestore
   */
  const createNewChat = async () => {
    try {
      const doc = await addDoc(
        collection(db, "users", session?.user?.email!, "chats"),
        {
          userId: session?.user?.email!,
          createdAt: serverTimestamp(),
        }
      );
      if (doc.id) router.push(`/chat/${doc.id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusCircleIcon className="h-4 w-4" />
      <p>New chat</p>
    </div>
  );
};

export default NewChat;
