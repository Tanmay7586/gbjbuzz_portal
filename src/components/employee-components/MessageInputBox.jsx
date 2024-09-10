import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faStrikethrough, faLink, faFont, faList, faFaceSmile, faVideo } from "@fortawesome/free-solid-svg-icons";

const MessageInputBox = ({ message, setMessage, handleKeyDown }) => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const formatText = (command) => {
    let newMessage = message;
    switch (command) {
      case "bold":
        newMessage = isBold ? newMessage.replace(/\*\*(.*?)\*\*/g, '$1') : `**${newMessage}**`;
        setIsBold(!isBold);
        break;
      case "italic":
        newMessage = isItalic ? newMessage.replace(/\*(.*?)\*/g, '$1') : `*${newMessage}*`;
        setIsItalic(!isItalic);
        break;
      case "strikethrough":
        newMessage = isStrikethrough ? newMessage.replace(/~~(.*?)~~/g, '$1') : `~~${newMessage}~~`;
        setIsStrikethrough(!isStrikethrough);
        break;
      case "link":
        // Just a placeholder action for link; you might want to implement link insertion logic.
        newMessage = isLink ? newMessage.replace(/\[(.*?)\]\((.*?)\)/g, '$1') : `[${newMessage}](url)`;
        setIsLink(!isLink);
        break;
      default:
        break;
    }
    setMessage(newMessage);
  };

  return (
    <div className="p-4">
      <div className=" border rounded-xl overflow-hidden">
        <div className="flex items-center p-2">
          <button className={`p-1 hover:bg-gray-200 rounded ${isBold ? 'bg-gray-300' : ''}`} onClick={() => formatText("bold")}>
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button className={`p-1 hover:bg-gray-200 rounded ${isItalic ? 'bg-gray-300' : ''}`} onClick={() => formatText("italic")}>
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button className={`p-1 hover:bg-gray-200 rounded ${isStrikethrough ? 'bg-gray-300' : ''}`} onClick={() => formatText("strikethrough")}>
            <FontAwesomeIcon icon={faStrikethrough} />
          </button>
          <button className={`p-1 hover:bg-gray-200 rounded ${isLink ? 'bg-gray-300' : ''}`} onClick={() => formatText("link")}>
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div>
        <textarea
          className="w-full p-2 resize-none"
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
        />
        <div className="flex items-center justify-between p-2">
          <div className="flex space-x-1">
            <button className="p-1 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faFont} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faList} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faFaceSmile} />
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <FontAwesomeIcon icon={faVideo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInputBox;
