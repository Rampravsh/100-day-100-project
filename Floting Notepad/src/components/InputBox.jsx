import React, { useState } from "react";

const InputBox = ({ addNote }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddNote = () => {
    if (inputValue.trim()) {
      addNote(inputValue);
      setInputValue(""); // Clear input after adding
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddNote();
          }
        }}
        placeholder="Enter your note"
        className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-sm"
      />
      <button
        onClick={handleAddNote}
        className="ml-3 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
      >
        Add Note
      </button>
    </div>
  );
};

export default InputBox;
