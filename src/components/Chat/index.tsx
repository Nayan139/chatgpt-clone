"use client";
import React from "react";
import { ChatProps } from "@/types/components/ChatPage";


const Chat = ({ chatId, messages }: ChatProps) => {
  // TODO :- Upcoming feature
  // const fetchMessages = async () => {
  //   try {
  //     const querySnapshot = await getDocs(
  //       query(
  //         collection(
  //           db,
  //           "users",
  //           session?.user?.email!,
  //           "chats",
  //           chatId,
  //           "messages"
  //         ),
  //         orderBy("createdAt", "asc")
  //       )
  //     );
  //     querySnapshot.forEach((doc) => {
  //       setMessage((prevChat) => [...prevChat, doc.data() as Message]);
  //     });
  //   } catch (error) {
  //     console.error("error :>> ", error);
  //   }
  // };

  /**
   * Call on the component mount
   */
  // useEffect(() => {
  //   if (session?.user?.email) fetchMessages();
  // }, []);

  return (
    <div className="flex-1">
      {messages?.length
        ? messages.map((message: Message) => (
            <>
              Chat {chatId} {message.text}
            </>
          ))
        : null}
    </div>
  );
};

export default Chat;
