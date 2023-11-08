"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { db } from "@/firebase";
import useSession from "@/hooks/useSession";
import { ChatRowProps } from "@/types/components/ChatRow/index";
import { useRouter } from "next/navigation";
import useChat from "@/hooks/useChat";

const ChatRow = ({ id }: ChatRowProps) => {
  //Hooks
  const router = useRouter();
  const pathname = usePathname();
  const { session } = useSession();
  const { chats, setChats } = useChat();

  //State
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname, id]);

  /**
   * This method is removed the chats
   */
  const removedChats = async () => {
    try {
      const removedChat: string[] = chats?.length
        ? chats?.filter((chat: string) => chat !== id)
        : [];
      setChats && setChats([...removedChat]);
      await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
      router.replace("/landing");
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * This method is used for the get title for the sidebar
   */
  const handleTitle = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(
            db,
            "users",
            session?.user?.email!,
            "chats",
            id,
            "messages"
          ),
          orderBy("createdAt", "asc")
        )
      );
      setTitle(
        querySnapshot.docs[querySnapshot.docs.length - 1].data().text ||
          "New Chat"
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center mt-2 ${active && "bg-gray-700/50"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">{title} New Chat</p>
      <TrashIcon
        onClick={removedChats}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
};

export default ChatRow;
