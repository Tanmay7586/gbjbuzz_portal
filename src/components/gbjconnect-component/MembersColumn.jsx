import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AddMemberModal from "./AddMemberModal"; // Import the new modal component

const MembersColumn = ({ members, createdOn }) => {
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle inviting a new member
  const handleAddMember = (member) => {
    // Implement your logic to invite a member using the member object
    console.log("Inviting member:", member);
    
    // Close the modal
    setIsAddMemberModalOpen(false);
  };

  return (
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
            onClick={() => navigate('/home')} // Redirect to /home on click
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
        <button
          onClick={() => setIsAddMemberModalOpen(true)} // Open the modal on click
          className="bg-purple-900 text-white py-1 px-3 text-xs font-bold rounded-full flex items-center justify-center"
        >
          <Plus className="w-3 h-3 mr-1" />
          Add Members
        </button>
      </div>

      {/* Modal for inviting members */}
      <AddMemberModal
        isAddMemberModalOpen={isAddMemberModalOpen}
        setIsAddMemberModalOpen={setIsAddMemberModalOpen}
        members={members} // Pass the members array to the modal
        handleAddMember={handleAddMember} // Call this function when inviting a member
      />
    </div>
  );
};

export default MembersColumn;
    