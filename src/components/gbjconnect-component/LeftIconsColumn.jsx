import React from "react";
import { Home, Bell, MessageCircle } from "lucide-react";

const LeftIconsColumn = ({ totalUnreadMessages }) => {
  return (
    <div className="w-16 bg-gray-700 flex flex-col items-center py-4 gap-9">
      <div className="w-10 h-10 bg-purple-600 rounded-full overflow-hidden">
        <img
          src="/api/placeholder/40/40"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <nav className="flex flex-col gap-2">
        <div className="bg-purple-950 p-2 rounded-full">
          <Home
            aria-label="Home"
            className="w-6 h-6 text-white hover:text-white cursor-pointer"
          />
        </div>
        <div className="relative bg-purple-950 p-2 rounded-full">
          <Bell
            aria-label="Notifications"
            className="w-6 h-6 text-white hover:text-white cursor-pointer"
          />
          {totalUnreadMessages > 0 && (
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
              {totalUnreadMessages}
            </span>
          )}
        </div>
        <div className="relative bg-purple-950 p-2 rounded-full">
          <MessageCircle
            aria-label="Messages"
            className="w-6 h-6 text-white hover:text-white cursor-pointer"
          />
          {totalUnreadMessages > 0 && (
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
              {totalUnreadMessages}
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default LeftIconsColumn;