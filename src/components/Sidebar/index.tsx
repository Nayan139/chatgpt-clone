import React from "react";
import NewChat from "@/components/NewChat";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>
            {/* Model Selecttion */}
            Sidebar goes here
          </div>
          {/* Map through the chat rows */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
