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

const CreateChannelModal = ({
  isChannelModalOpen,
  setIsChannelModalOpen,
  newChannelName,
  setNewChannelName,
  newChannelDescription,
  setNewChannelDescription,
  newChannelInvite,
  setNewChannelInvite,
  handleCreateChannel,
}) => {
  return (
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
            <label htmlFor="channelName" className="text-right text-sm font-medium">
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
            <label htmlFor="channelDescription" className="text-right text-sm font-medium">
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
            <label htmlFor="channelInvite" className="text-right text-sm font-medium">
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
  );
};

export default CreateChannelModal;
