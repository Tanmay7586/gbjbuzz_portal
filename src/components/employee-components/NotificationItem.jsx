import React from "react";
import { User } from "lucide-react";

const NotificationItem = ({ name, message }) => {
  return (
    <li className="mb-4 flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
      <div className="relative">
        <User className="w-10 h-10 text-gray-500 bg-gray-200 rounded-full p-2" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
      <div className="flex-grow text-left">
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="text-xs text-gray-500 truncate">{message}</p>
      </div>
    </li>
  );
};

export default NotificationItem;
