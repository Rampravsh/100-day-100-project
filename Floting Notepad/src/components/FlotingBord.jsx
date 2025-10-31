import React, { useState, useRef, useEffect } from "react";

const Note = ({ note, onDelete, onPositionChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: note.position?.x || note.initialPos?.x || 0,
    y: note.position?.y || note.initialPos?.y || 0,
  });
  const noteRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const board = document.getElementById("board");
    if (!board) return;

    if (e.target.tagName === "BUTTON") return; // Don't drag if delete button is clicked
    setIsDragging(true);
    const noteElement = noteRef.current;
    if (noteElement) {
      const noteRect = noteElement.getBoundingClientRect();
      offsetRef.current = {
        x: e.clientX - noteRect.left,
        y: e.clientY - noteRect.top,
      };
      noteElement.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const board = document.getElementById("board");
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    setPosition({
      x: e.clientX - boardRect.left - offsetRef.current.x,
      y: e.clientY - boardRect.top - offsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const noteElement = noteRef.current;
    if (noteElement) {
      noteElement.style.cursor = "grab";
      onPositionChange(note.id, position);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={noteRef}
      onMouseDown={handleMouseDown}
      className="absolute w-64 h-40 bg-white rounded-lg shadow-xl flex items-center justify-center text-gray-800 text-lg font-semibold p-4 cursor-grab"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>{note.text}</p>
      <button
        onClick={() => onDelete(note.id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &#x2715;
      </button>
    </div>
  );
};

const FlotingBord = ({ notes, deleteNote, updateNotePosition }) => {
  return (
    <div className="relative w-full h-full" id="board">
      {notes.map((note, index) => {
        // Set initial position only for new notes that don't have one
        if (!note.position && !note.initialPos) {
          const board = document.getElementById("board");
          const boardRect = board
            ? board.getBoundingClientRect()
            : { width: window.innerWidth, height: window.innerHeight };
          // Set a random initial position within the board, avoiding edges
          note.initialPos = {
            x: Math.random() * (boardRect.width - 256), // 256 is note width
            y: Math.random() * (boardRect.height / 3), // Place in upper third
          };
        }
        return (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onPositionChange={updateNotePosition}
          />
        );
      })}
    </div>
  );
};

export default FlotingBord;
