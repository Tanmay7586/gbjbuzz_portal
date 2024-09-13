import React, { useState } from "react";
import { X } from "lucide-react";

const MeetingScheduleModal = ({ isOpen, onClose, openMeetingModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    channel: "",
    inviteId: "",
    link: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting scheduled:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-3xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Schedule Meeting</h2>
          <div className="flex gap-4">
            <button
              onClick={openMeetingModal}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 px-3 text-sm rounded-full"
            >
              See All Meetings
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} aria-label="Close" />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <div className="flex space-x-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex space-x-4">
            <select
              name="channel"
              value={formData.channel}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg appearance-none"
              required
            >
              <option value="">Channel</option>
              <option value="zoom">Zoom</option>
              <option value="teams">Teams</option>
              <option value="meet">Google Meet</option>
            </select>
            <input
              type="text"
              name="inviteId"
              value={formData.inviteId}
              onChange={handleChange}
              placeholder="Invite by ID"
              className="w-1/2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Link"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Discard
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingScheduleModal;
