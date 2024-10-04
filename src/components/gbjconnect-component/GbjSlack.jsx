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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
      image: "/shwetank.jpg",
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

  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);
  const [isDMModalOpen, setIsDMModalOpen] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  const [newChannelDescription, setNewChannelDescription] = useState("");
  const [newChannelInvite, setNewChannelInvite] = useState("");
  const [searchDM, setSearchDM] = useState("");

  const handleCreateChannel = () => {
    // Logic to create a new channel
    const newChannel = {
      name: newChannelName,
      unread: false,
      createdAt: new Date().toLocaleDateString(),
    };
    // Add the new channel to the channels list
    // This is a simplification; you'd typically update this through a state management solution or API call
    channels.push(newChannel);
    setIsChannelModalOpen(false);
    // Reset form fields
    setNewChannelName("");
    setNewChannelDescription("");
    setNewChannelInvite("");
  };

  const handleStartDM = (memberName) => {
    const existingDM = directMessages.find((dm) => dm.name === memberName);
    if (!existingDM) {
      const newDM = {
        name: memberName,
        unread: false,
        count: 0,
        image:
          members.find((m) => m.name === memberName)?.image ||
          "/api/placeholder/40/40",
      };
      setDirectMessages([...directMessages, newDM]);
    }
    setIsDMModalOpen(false);
    setSearchDM("");
    setSelectedDM(memberName);
    setSelectedChannel(null);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchDM.toLowerCase())
  );

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

          {/* Toggle Direct Messages Section */}
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
      <Dialog open={isChannelModalOpen} onOpenChange={setIsChannelModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Channel</DialogTitle>
            <DialogDescription>
              Enter the details for your new channel.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="channelName"
                className="text-right text-sm font-medium"
              >
                Channel Name
              </label>
              <Input
                id="channelName"
                value={newChannelName}
                onChange={(e) => setNewChannelName(e.target.value)}
                className="col-span-3 text-sm px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="channelDescription"
                className="text-right text-sm font-medium"
              >
                Description
              </label>
              <Input
                id="channelDescription"
                value={newChannelDescription}
                onChange={(e) => setNewChannelDescription(e.target.value)}
                className="col-span-3 text-sm px-3 py-2"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="channelInvite"
                className="text-right text-sm font-medium"
              >
                Invite by ID/Name
              </label>
              <Input
                id="channelInvite"
                value={newChannelInvite}
                onChange={(e) => setNewChannelInvite(e.target.value)}
                className="col-span-3 text-sm px-3 py-2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleCreateChannel} className="text-sm px-4 py-2">
              Create Channel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Direct Message Creation Modal */}
      <Dialog open={isDMModalOpen} onOpenChange={setIsDMModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start a Direct Message</DialogTitle>
            <DialogDescription>
              Search for a person to start a conversation.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              placeholder="Search people..."
              value={searchDM}
              onChange={(e) => setSearchDM(e.target.value)}
              className="mb-4"
            />
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {filteredMembers.map((member, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>{member.name}</span>
                  </div>
                  <Button onClick={() => handleStartDM(member.name)}>
                    Start Chat
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GbjSlack;
