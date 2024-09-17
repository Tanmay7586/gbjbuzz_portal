import React, { useState } from "react";
import { X } from "lucide-react";
import MeetingScheduleModal from "./MeetingScheduleModal";

const MeetingModal = ({ isOpen, onClose }) => {
  const [isScheduling, setIsScheduling] = useState(false);
  const [meetings, setMeetings] = useState([
    {
      assigner: "Gunjan Jagnade",
      title: "Portal Meet",
      time: "10 PM",
      date: "10th September",
    },
    {
      assigner: "Sakshi Tikle",
      title: "Portal Meet",
      time: "10 PM",
      date: "11th September",
    },
    {
      assigner: "Gunjan Jagnade",
      title: "Portal Meet",
      time: "10 PM",
      date: "10th September",
    },
    {
      assigner: "Sakshi Tikle",
      title: "Portal Meet",
      time: "10 PM",
      date: "11th September",
    },
    {
      assigner: "Gunjan Jagnade",
      title: "Portal Meet",
      time: "10 PM",
      date: "10th September",
    },
    {
      assigner: "Sakshi Tikle",
      title: "Portal Meet",
      time: "10 PM",
      date: "11th September",
    },
  ]);

  const toggleScheduleForm = () => setIsScheduling(!isScheduling);

  // Function to add a new meeting
  const handleAddMeeting = (newMeeting) => {
    setMeetings((prevMeetings) => [newMeeting, ...prevMeetings]); // Prepend the new meeting
    setIsScheduling(false); // Close the schedule modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-3xl p-6 w-full max-w-2xl">
        {isScheduling ? (
          <MeetingScheduleModal
            isOpen={isScheduling}
            onClose={() => setIsScheduling(false)}
            openMeetingModal={() => setIsScheduling(false)}
            addMeeting={handleAddMeeting} // Pass the addMeeting function
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Meetings</h2>
              <div className="flex items-center">
                <button
                  onClick={toggleScheduleForm}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 px-3 text-sm rounded-full"
                >
                  + Schedule Meeting
                </button>
                <button
                  onClick={onClose}
                  className="ml-4 text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "250px" }}>
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Assigner</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Time</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((meeting, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                    >
                      <td className="px-4 py-2">{meeting.assigner}</td>
                      <td className="px-4 py-2">{meeting.title}</td>
                      <td className="px-4 py-2">{meeting.time}</td>
                      <td className="px-4 py-2">{meeting.date}</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font py-1 px-3 rounded-full">
                          Join
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MeetingModal;
