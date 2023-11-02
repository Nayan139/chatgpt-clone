import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { deleteDoc, doc } from "firebase/firestore";
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

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center mt-2 ${active && "bg-gray-700/50"}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate"> New Chat</p>
      <TrashIcon
        onClick={removedChats}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
};

export default ChatRow;
