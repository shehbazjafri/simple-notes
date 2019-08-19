import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import service from "./NoteService";
function App() {
  const [notes, setNotes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const notes = service.getNotes();
    setNotes(notes);
  }, []);

  const onNoteSelect = index => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="App">
      <List notes={notes} onSelect={onNoteSelect} selected={selectedIndex} />
    </div>
  );
}

export default App;
