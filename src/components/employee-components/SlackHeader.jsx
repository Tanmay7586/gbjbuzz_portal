import React from "react";

const SlackHeader = () => (
  <header className="bg-purple-800 p-2 flex items-center">
    <h1 className="text-white font-bold text-xl">Slack</h1>
    <div className="flex-1 mx-4 flex justify-center">
      <input
        type="text"
        placeholder="Search GBJ Slack"
        className="bg-white text-purple-900 placeholder-purple-400 rounded px-4 py-1 w-7/12 rounded-full "
      />
    </div>
  </header>
);

export default SlackHeader;
