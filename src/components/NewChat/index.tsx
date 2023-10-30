import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const NewChat = () => {
  return (
    <div className="border-gray-700 border chatRow">
      <PlusCircleIcon className="h-4 w-4" />
      <p>New chat</p>
    </div>
  );
};

export default NewChat;
