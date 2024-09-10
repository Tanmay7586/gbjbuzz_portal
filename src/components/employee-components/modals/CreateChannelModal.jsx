import React from "react";

const CreateChannelModal = ({
  isCreateChannelModalOpen,
  closeCreateChannelModal,
  newChannelName,
  setNewChannelName,
  createChannel,
}) => {
  if (!isCreateChannelModalOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold">Create Channel</h3>
        <input
          type="text"
          placeholder="Channel Name"
          value={newChannelName}
          onChange={(e) => setNewChannelName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={closeCreateChannelModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={createChannel}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelModal;
