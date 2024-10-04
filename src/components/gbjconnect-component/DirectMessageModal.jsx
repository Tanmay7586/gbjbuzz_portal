import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DirectMessageModal = ({
  isDMModalOpen,
  setIsDMModalOpen,
  searchDM,
  setSearchDM,
  filteredMembers,
  handleStartDM,
}) => {
  return (
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
                  <Button onClick={() => handleStartDM(member.name)}>
                    Start Chat
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

export default DirectMessageModal;
