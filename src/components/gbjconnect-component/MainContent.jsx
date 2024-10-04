import React from "react";
import { Plus } from "lucide-react";

const MainContent = ({ selectedChannel, selectedDM }) => {
  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-gray-700 p-4">
        <h2 className="text-xl font-bold">
          {selectedChannel
            ? `#${selectedChannel}`
            : selectedDM
            ? `${selectedDM}`
            : "Select a channel or message"}
        </h2>
      </header>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Messages for selected channel would go here */}
      </div>
      <div className="p-4">
        <div className="bg-gray-700 rounded-md p-2 flex items-center">
          <Plus
            aria-label="Add a new message"
            className="w-6 h-6 mr-2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Type Your Message Here"
            className="bg-transparent outline-none w-full"
            aria-label="Type your message"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;