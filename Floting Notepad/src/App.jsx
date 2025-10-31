import { useState, useEffect } from "react";
import "./App.css";
import FlotingBord from "./components/FlotingBord";
import InputBox from "./components/InputBox";

function App() {
  // Initialize state from localStorage, or with an empty array if nothing is stored.
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const addNote = (noteText) => {
    const newNote = {
      id: Date.now(),
      text: noteText,
      // Position will be set in FlotingBord for new notes
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const updateNotePosition = (id, position) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, position } : note))
    );
  };

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="bg-linear-to-r from-blue-500 to-purple-700 text-white h-screen flex items-center flex-col gap-20 pt-8 overflow-hidden">
      <InputBox addNote={addNote} />
      <FlotingBord
        notes={notes}
        deleteNote={deleteNote}
        updateNotePosition={updateNotePosition}
      />
    </main>
  );
}

export default App;
