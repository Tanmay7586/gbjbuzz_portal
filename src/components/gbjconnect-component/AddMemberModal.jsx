import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddMemberModal = ({
  isAddMemberModalOpen,
  setIsAddMemberModalOpen,
  members,
  handleAddMember,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter members based on the search term, with added checks
  const filteredMembers = members.filter((member) => {
    const nameMatch =
      member.name &&
      typeof member.name === "string" &&
      member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const idMatch =
      member.id &&
      typeof member.id === "string" &&
      member.id.toLowerCase().includes(searchTerm.toLowerCase());

    return nameMatch || idMatch;
  });

  return (
    <Dialog open={isAddMemberModalOpen} onOpenChange={setIsAddMemberModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a New Member</DialogTitle>
          <DialogDescription>
            Search for a person to invite to the group.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Input
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {filteredMembers.length === 0 ? (
              <li className="p-2 text-gray-500">No members found.</li>
            ) : (
              filteredMembers.map((member, index) => (
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
                  <Button onClick={() => handleAddMember(member)}>
                    Invite
                  </Button>
                </li>
              ))
            )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddMemberModal;
