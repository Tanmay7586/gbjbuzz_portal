import React from 'react';
import { ChevronDown, ChevronUp, PlusCircle } from 'lucide-react';

const DirectMessages = ({ isOpen, toggle, coworkers, selected, onCoworkerClick, onAddCoworker }) => {
  return (
    <div className="px-4 py-2 space-y-6">
      <button
        className="flex items-center justify-between text-white w-full mb-2"
        onClick={toggle}
      >
        <span>Direct Messages</span>
        {isOpen ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}
      </button>
      {isOpen && (
        <>
          {coworkers.map((coworker, index) => (
            <div
              key={index}
              className={`flex items-center hover:bg-purple-600 rounded-xl text-purple-300 px-2 py-1 cursor-pointer ${selected === coworker ? "bg-purple-600" : ""}`}
              onClick={() => onCoworkerClick(coworker)}
            >
              <img
                src="/api/placeholder/24/24"
                alt="User"
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-sm">{coworker}</span>
            </div>
          ))}
          <button
            className="flex items-center text-yellow-400 bg-black rounded-full mt-2 px-2 py-1 text-sm"
            onClick={onAddCoworker}
          >
            + Add Coworkers
          </button>
        </>
      )}
    </div>
  );
};

export default DirectMessages;
