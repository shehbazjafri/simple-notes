import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import service from "./NoteService";
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notes = service.getNotes();
    setNotes(notes);
  }, []);

  return (
    <div className="App">
      <List notes={notes} />
    </div>
  );
}

export default App;
