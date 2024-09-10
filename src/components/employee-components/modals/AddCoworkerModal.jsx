import React from "react";

const AddCoworkerModal = ({
  isAddCoworkerModalOpen,
  closeAddCoworkerModal,
  newCoworkerName,
  setNewCoworkerName,
  addCoworker,
}) => {
  if (!isAddCoworkerModalOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold">Add Coworker</h3>
        <input
          type="text"
          placeholder="Coworker Name"
          value={newCoworkerName}
          onChange={(e) => setNewCoworkerName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={closeAddCoworkerModal}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={addCoworker}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCoworkerModal;
