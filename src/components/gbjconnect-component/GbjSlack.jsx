import React, { useState } from "react";
import LeftIconsColumn from "./LeftIconsColumn";
import ChannelsColumn from "./ChannelsColumn";
import MainContent from "./MainContent";
import MembersColumn from "./MembersColumn";
import CreateChannelModal from "./CreateChannelModal"; // Import the modal
import DirectMessageModal from "./DirectMessageModal.jsx"; // Existing import
import "../../App.css";

const GbjSlack = () => {
  const [channels, setChannels] = useState([
    { name: "GBJBUZZPORTAL", unread: false },
    { name: "PRINTABLE", unread: true, count: 30 },
    { name: "OTHER", unread: false },
  ]);

  const [selectedChannel, setSelectedChannel] = useState("GBJBUZZPORTAL");
  const [selectedDM, setSelectedDM] = useState(null);
  const [searchDM, setSearchDM] = useState("");

  const [directmessages, setDirectMessages] = useState([
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

  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);
  const [isDMModalOpen, setIsDMModalOpen] = useState(false);

  // New state variables for channel creation
  const [newChannelName, setNewChannelName] = useState("");
  const [newChannelDescription, setNewChannelDescription] = useState("");
  const [newChannelInvite, setNewChannelInvite] = useState("");

  const handleChannelClick = (channelName) => {
    setSelectedChannel(channelName);
    setSelectedDM(null);
  };

  const handleDMClick = (dmName) => {
    setSelectedDM(dmName);
    setSelectedChannel(null);
  };

  const handleCreateChannel = () => {
    const newChannel = {
      name: newChannelName,
      description: newChannelDescription,
      unread: false,
    };
    setChannels([...channels, newChannel]);
    setIsChannelModalOpen(false);

    // Reset channel creation fields
    setNewChannelName("");
    setNewChannelDescription("");
    setNewChannelInvite("");
  };

  const handleStartDM = (memberName) => {
    const existingDM = directmessages.find((dm) => dm.name === memberName);
    if (!existingDM) {
      const newDM = {
        name: memberName,
        unread: false,
        count: 0,
        image:
          members.find((m) => m.name === memberName)?.image ||
          "/api/placeholder/40/40",
      };
      setDirectMessages([...directmessages, newDM]);
    }
    setIsDMModalOpen(false);
    setSelectedDM(memberName);
    setSelectedChannel(null);
  };

  const totalUnreadMessages =
    directmessages.reduce(
      (total, dm) => total + (dm.unread ? dm.count : 0),
      0
    ) +
    channels.reduce(
      (total, channel) => total + (channel.unread ? channel.count : 0),
      0
    );

  // Filter members based on the search input
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchDM.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <LeftIconsColumn totalUnreadMessages={totalUnreadMessages} />
      <ChannelsColumn
        channels={channels}
        directmessages={directmessages}
        selectedChannel={selectedChannel}
        selectedDM={selectedDM}
        handleChannelClick={handleChannelClick}
        handleDMClick={handleDMClick}
        setIsChannelModalOpen={setIsChannelModalOpen}
        setIsDMModalOpen={setIsDMModalOpen}
      />
      <MainContent selectedChannel={selectedChannel} selectedDM={selectedDM} />
      <MembersColumn members={members} createdOn={createdOn} />
      
      {/* Create Channel Modal */}
      <CreateChannelModal
        isChannelModalOpen={isChannelModalOpen}
        setIsChannelModalOpen={setIsChannelModalOpen}
        newChannelName={newChannelName}
        setNewChannelName={setNewChannelName}
        newChannelDescription={newChannelDescription}
        setNewChannelDescription={setNewChannelDescription}
        newChannelInvite={newChannelInvite}
        setNewChannelInvite={setNewChannelInvite}
        handleCreateChannel={handleCreateChannel}
      />
      
      {/* Direct Message Modal */}
      <DirectMessageModal
        isDMModalOpen={isDMModalOpen}
        setIsDMModalOpen={setIsDMModalOpen}
        searchDM={searchDM}
        setSearchDM={setSearchDM}
        filteredMembers={filteredMembers}
        handleStartDM={handleStartDM}
      />
    </div>
  );
};

export default GbjSlack;
