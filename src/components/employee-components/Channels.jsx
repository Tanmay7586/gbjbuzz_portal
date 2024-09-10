import React from 'react';
import { ChevronDown, ChevronUp, PlusCircle } from 'lucide-react';

const Channels = ({ isOpen, toggle, channels, selected, onChannelClick, onCreateChannel }) => {
  return (
    <div className="p-4">
        <h1 className='font-bold text-white text-xl mb-3'>GBJ Slack</h1>
      <button 
        className="flex items-center justify-between text-white w-full mb-2"
        onClick={toggle}
      >
        <span>Channels</span>
        {isOpen ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}
      </button>
      {isOpen && (
        <ul className="space-y-1">
          {channels.map((channel, index) => (
            <li
              key={index}
              className={`text-white hover:bg-purple-600 rounded-xl px-2 py-1 cursor-pointer ${selected === channel ? "bg-purple-600" : ""}`}
              onClick={() => onChannelClick(channel)}
            >
              # {channel}
            </li>
          ))}
          <button
            className="flex items-center text-yellow-400 bg-black rounded-full mt-2 px-2 py-1 text-sm"
            onClick={onCreateChannel}
          >
           + Create Channel
          </button>
        </ul>
      )}
    </div>
  );
};

export default Channels;
