import React, { useState } from "react";
import { Search, Plus, ChevronDown, ChevronUp } from "lucide-react";

const ChannelsColumn = ({
  channels,
  directmessages,
  selectedChannel,
  selectedDM,
  handleChannelClick,
  handleDMClick,
  setIsChannelModalOpen,
  setIsDMModalOpen,
}) => {
  const [channelsVisible, setChannelsVisible] = useState(true);
  const [dmVisible, setDmVisible] = useState(true);

  return (
    <div className="w-64 bg-purple-950 flex flex-col">
      <div className="p-4">
        <div className="bg-gray-400 rounded-full px-3 py-1 flex items-center mb-4">
          <Search aria-label="Search" className="w-4 h-4 mr-2 text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-white outline-none w-full"
            aria-label="Search channels"
          />
        </div>

        <h3 className="text-lg font-semibold mb-2 text-white">
          GBJ<span className="text-sm">CONNECT</span>
        </h3>

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
          <Plus
            className="w-4 h-4 text-gray-400 cursor-pointer"
            onClick={() => setIsChannelModalOpen(true)}
          />
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

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <h3 className="text-sm font-semibold text-gray-400 mr-1">
              Direct Messages
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
          <Plus
            className="w-4 h-4 text-gray-400 cursor-pointer"
            onClick={() => setIsDMModalOpen(true)}
          />
        </div>
        {dmVisible && (
          <ul className="mb-3">
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
                  <span>{dm.name}</span>
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
  );
};

export default ChannelsColumn;