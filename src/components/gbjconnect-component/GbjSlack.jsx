import React, { useState } from "react";
import {
  Home,
  Bell,
  MessageCircle,
  Search,
  Plus,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import "../../App.css";

const GbjSlack = () => {
  const [channels] = useState([
    { name: "GBJBUZZPORTAL", unread: false },
    { name: "PRINTABLE", unread: true, count: 30 },
    { name: "OTHER", unread: false },
  ]);

  const [selectedChannel, setSelectedChannel] = useState("GBJBUZZPORTAL");
  const [selectedDM, setSelectedDM] = useState(null);

  const [directmessages] = useState([
    {
      name: "Shwetank Gopnarayan",
      unread: true,
      count: 1,
      image: "/shwetank.jpg", // Add image URL here
    },
  ]);

  const [members] = useState([
    {
      name: "Sarthak Kakad",
      online: true,
      image: "/api/placeholder/40/40",
      admin: true,
    },
    {
      name: "Shwetank Gopnarayan",
      online: true,
      image: "/api/placeholder/40/40",
      admin: false,
    },
    {
      name: "Niraj Kamle",
      online: false,
      image: "/api/placeholder/40/40",
      admin: false,
    },
    {
      name: "Sameer Agam",
      online: false,
      image: "/api/placeholder/40/40",
      admin: false,
    },
  ]);

  const [createdOn] = useState("20/02/2024");

  const [channelsVisible, setChannelsVisible] = useState(true);
  const [dmVisible, setDmVisible] = useState(true);

  const handleChannelClick = (channelName) => {
    setSelectedChannel(channelName);
    setSelectedDM(null);
  };

  const handleDMClick = (dmName) => {
    setSelectedDM(dmName);
    setSelectedChannel(null);
  };

  // Calculate total unread messages
  const totalUnreadMessages =
    directmessages.reduce((total, dm) => {
      return total + (dm.unread ? dm.count : 0);
    }, 0) +
    channels.reduce((total, channel) => {
      return total + (channel.unread ? channel.count : 0);
    }, 0);

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Left Icons Column */}
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
          <h3 className="text-lg font-semibold mb-2 text-white">
            GBJ<span className="text-sm">CONNECT</span>
          </h3>

          {/* Toggle Channels Section */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h3 className="text-sm font-semibold text-gray-400 mr-1">
                Channels
              </h3>
              {channelsVisible ? (
                <ChevronUp
                  className="w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setChannelsVisible(false)}
                />
              ) : (
                <ChevronDown
                  className="w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setChannelsVisible(true)}
                />
              )}
            </div>
            <Plus className="w-4 h-4 text-gray-400" />
          </div>
          {channelsVisible && (
            <ul className="mb-3">
              {channels.map((channel, index) => (
                <li key={index} className="py-2 text-sm font-semibold">
                  <a
                    href="#"
                    onClick={() => handleChannelClick(channel.name)}
                    className={`flex items-center justify-between px-2 ${
                      selectedChannel === channel.name
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span># {channel.name}</span>
                    {channel.unread && (
                      <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
                        {channel.count}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Toggle Direct Messages Section */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h3 className="text-sm font-semibold text-gray-400 mr-1">
                Direct Message
              </h3>
              {dmVisible ? (
                <ChevronUp
                  className="w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setDmVisible(false)}
                />
              ) : (
                <ChevronDown
                  className="w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setDmVisible(true)}
                />
              )}
            </div>
            <Plus className="w-4 h-4 text-gray-400" />
          </div>
          {dmVisible && (
            <ul>
              {directmessages.map((dm, index) => (
                <li key={index} className="py-2 text-sm font-semibold">
                  <a
                    href="#"
                    onClick={() => handleDMClick(dm.name)}
                    className={`flex items-center justify-between px-2 ${
                      selectedDM === dm.name
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center">
                      <img
                        src={dm.image}
                        alt={dm.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>{dm.name}</span>
                    </div>
                    {dm.unread && (
                      <span className="bg-blue-500 text-white rounded-full px-2 text-xs">
                        {dm.count}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
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

      {/* Members Column */}
      <div className="w-64 bg-gray-900 p-4 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1 text-white">Group Info</h3>
            <h3 className="text-xs font-thin text-gray-300">
              Created on {createdOn}
            </h3>
          </div>
          <div className="bg-white rounded-full">
            <X
              aria-label="Close"
              className="w-6 h-6 p-1 text-black text-xs cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h3 className="text-base font-semibold text-gray-400 mr-1">
                Members
              </h3>
            </div>
          </div>
          <ul className="mb-7">
            {members.map((member, index) => (
              <li key={index} className="flex items-center mb-4">
                <div className="relative mr-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {member.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  )}
                </div>
                <p className="text-sm text-white">
                  {member.name}{" "}
                  {member.admin && (
                    <span className="text-xs text-gray-400 font-semibold ml-1">
                      Admin
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <button className=" bg-purple-900 text-white py-1 px-3 text-xs font-bold rounded-full flex items-center justify-center">
            <Plus className="w-3 h-3 mr-1" />
            Add Members
          </button>
        </div>
      </div>
    </div>
  );
};

export default GbjSlack;
