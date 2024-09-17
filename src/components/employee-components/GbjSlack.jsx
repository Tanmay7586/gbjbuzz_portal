import React, { useState } from "react";
import { Home, Bell, MessageCircle, Search, Plus } from "lucide-react";
import "../../App.css";

const GbjSlack = () => {
  const [channels] = useState([
    { name: "GBJBUZZPORTAL", unread: false },
    { name: "PRINTABLE", unread: true, count: 30 },
    { name: "OTHER", unread: false },
  ]);

  const [directmessages] = useState([
    {
      name: "Shwetank Gopnarayan",
      unread: true,
      count: 1,
      image: "/shwetank.jpg", // Add image URL here
    },
  ]);

  const [members] = useState([
    { name: "Sarthak Kakad", online: true, image: "/api/placeholder/40/40" },
    {
      name: "Shwetank Gopnarayan",
      online: true,
      image: "/api/placeholder/40/40",
    },
    { name: "Niraj Kamle", online: false, image: "/api/placeholder/40/40" },
    { name: "Sameer Agam", online: false, image: "/api/placeholder/40/40" },
  ]);

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Left Icons Column */}
      <div className="w-16 bg-gray-900 flex flex-col items-center py-4 space-y-6">
        <div className="w-10 h-10 bg-purple-600 rounded-full overflow-hidden">
          <img
            src="/api/placeholder/40/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <nav>
          <Home
            aria-label="Home"
            className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          />
          <Bell
            aria-label="Notifications"
            className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          />
          <MessageCircle
            aria-label="Messages"
            className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
          />
        </nav>
      </div>

      {/* Channels Column */}
      <div className="w-64 bg-purple-950 flex flex-col">
        <div className="p-4">
          {/* Search bar */}
          <div className="bg-gray-400 rounded-full px-3 py-1 flex items-center mb-4">
            <Search aria-label="Search" className="w-4 h-4 mr-2 text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-white outline-none w-full"
              aria-label="Search channels"
            />
          </div>

          {/* GBJConnect Section */}
          <h3 className="text-lg font-semibold mb-2 text-white">GBJConnect</h3>

          {/* Channels Section */}
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Channels</h3>
          <ul className="mb-3">
            {channels.map((channel, index) => (
              <li key={index} className="py-1 hover:bg-gray-700 rounded">
                <a href="#" className="flex items-center justify-between px-2">
                  <span className="text-white">#{channel.name}</span>
                  {channel.unread && (
                    <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
                      {channel.count}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Direct Messages Section */}
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            Direct Message
          </h3>
          <ul>
            {directmessages.map((directmessage, index) => (
              <li
                key={index}
                className="py-1 hover:bg-gray-700 rounded text-sm"
              >
                <a href="#" className="flex items-center justify-between px-2">
                  {/* Add image and name */}
                  <div className="flex items-center">
                    <img
                      src={directmessage.image} // Assuming the image URL is part of the direct message object
                      alt={directmessage.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-white">{directmessage.name}</span>
                  </div>

                  {/* Unread message count */}
                  {directmessage.unread && (
                    <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
                      {directmessage.count}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-700 p-4">
          <h2 className="text-xl font-bold">#GBJBUZZPORTAL</h2>
        </header>
        <div className="flex-1 overflow-y-auto p-4">
          {/* Messages would go here */}
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

      {/* Members Column */}
      <div className="w-64 bg-gray-800 p-4">
        <h3 className="text-lg font-bold mb-4">Members</h3>
        <ul>
          {members.map((member, index) => (
            <li key={index} className="flex items-center mb-4">
              <div className="relative mr-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                {member.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                )}
              </div>
              <span>{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GbjSlack;
