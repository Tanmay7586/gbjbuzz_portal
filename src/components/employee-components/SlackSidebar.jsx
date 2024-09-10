import React from "react";
import { Home, Bell } from "lucide-react";

const SlackSidebar = () => (
  <aside className="bg-purple-800 w-16 flex flex-col items-center py-4 space-y-6">
    <Home className="text-white" size={24} />
    <img
      src="/api/placeholder/36/36"
      alt="Profile"
      className="w-9 h-9 rounded-full"
    />
    <Bell className="text-white" size={24} />
  </aside>
);

export default SlackSidebar;
