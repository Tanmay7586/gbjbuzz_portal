import React, { useState } from "react";
import SlackSidebar from "./SlackSidebar";
import SlackHeader from "./SlackHeader";
import MessageInput from "./MessageInputBox";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import CreateChannelModal from "./modals/CreateChannelModal";
import AddCoworkerModal from "./modals/AddCoworkerModal";

const GbjSlack = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store sent messages
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);
  const [isDirectMessagesOpen, setIsDirectMessagesOpen] = useState(true);
  const [selectedChannelOrCoworker, setSelectedChannelOrCoworker] =
    useState("GBJBUZZPORTAL");
  const [isCreateChannelModalOpen, setIsCreateChannelModalOpen] =
    useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  const [isAddCoworkerModalOpen, setIsAddCoworkerModalOpen] = useState(false);
  const [newCoworkerName, setNewCoworkerName] = useState("");

  const [channels, setChannels] = useState([
    "GBJBUZZPORTAL",
    "PRINTABLE",
    "OTHER",
  ]);
  const [coworkers, setCoworkers] = useState(["Shwetank Gopnarayan"]);

  const handleSelectionClick = (name) => {
    setSelectedChannelOrCoworker(name);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        setMessages([...messages, message]); // Add message to the list
        setMessage("");
      }
    }
  };

  return (
    <div className="bg-purple-800 p-2 h-screen flex flex-col">
      <SlackHeader />
      <div className="flex flex-1 ">
        <SlackSidebar />
        <aside className="bg-violet-950 w-64 flex flex-col">
          <Channels
            isOpen={isChannelsOpen}
            toggle={() => setIsChannelsOpen(!isChannelsOpen)}
            channels={channels}
            selected={selectedChannelOrCoworker}
            onChannelClick={handleSelectionClick}
            onCreateChannel={() => setIsCreateChannelModalOpen(true)}
          />
          <DirectMessages
            isOpen={isDirectMessagesOpen}
            toggle={() => setIsDirectMessagesOpen(!isDirectMessagesOpen)}
            coworkers={coworkers}
            selected={selectedChannelOrCoworker}
            onCoworkerClick={handleSelectionClick}
            onAddCoworker={() => setIsAddCoworkerModalOpen(true)}
          />
        </aside>

        <main className="flex-1 flex flex-col bg-white">
          <div className="p-4">
            <h2 className="text-xl font-bold ">#{selectedChannelOrCoworker}</h2>
          </div>
          <div className="flex-1 p-6">
            <p className="text-lg">{`Welcome to the ${selectedChannelOrCoworker} conversation.`}</p>
            {/* Display sent messages */}
            <div className="mt-4">
              {messages.map((msg, index) => (
                <div key={index} className="bg-gray-200 p-2 rounded mb-2">
                  {msg}
                </div>
              ))}
            </div>
          </div>
          <MessageInput
            message={message}
            setMessage={setMessage}
            onKeyDown={handleKeyDown}
          />
        </main>
      </div>

      {isCreateChannelModalOpen && (
        <CreateChannelModal
          newChannelName={newChannelName}
          setNewChannelName={setNewChannelName}
          onClose={() => setIsCreateChannelModalOpen(false)}
          onCreateChannel={() => {
            setChannels([...channels, newChannelName]);
            setNewChannelName("");
            setIsCreateChannelModalOpen(false);
          }}
        />
      )}

      {isAddCoworkerModalOpen && (
        <AddCoworkerModal
          newCoworkerName={newCoworkerName}
          setNewCoworkerName={setNewCoworkerName}
          onClose={() => setIsAddCoworkerModalOpen(false)}
          onAddCoworker={() => {
            setCoworkers([...coworkers, newCoworkerName]);
            setNewCoworkerName("");
            setIsAddCoworkerModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default GbjSlack;
