import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import service from "./NoteService";
import styled from "styled-components";
import create from "./create.svg";

const CreateButton = styled.button`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  background-color: whitesmoke;
  color: #fff;
  border-radius: 50px;
  border: 2px black solid;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
`;

function App(props) {
  const [notes, setNotes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    text: ""
  });

  const loadNotes = () => {
    const notes = service.getNotes();
    setNotes(notes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const onNoteSelect = index => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  const openNoteForm = () => {
    props.history.push("/form");
  };

  const onNoteChange = event => {
    setCurrentNote({ ...currentNote, [event.target.name]: event.target.value });
  };

  const onNoteSubmit = event => {
    event.preventDefault();
    service.saveNote(currentNote);
    setCurrentNote({ title: "", text: "" });
    loadNotes();
    props.history.push("/");
  };

  const openEditNote = note => {
    const editNote = { ...note, edit: true };
    setCurrentNote(editNote);
    props.history.push("/form");
  };

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => (
          <React.Fragment>
            <List
              notes={notes}
              onSelect={onNoteSelect}
              selected={selectedIndex}
              editNote={openEditNote}
            />
            <CreateButton onClick={openNoteForm}>
              <img src={create} height="50" alt="pen" />
            </CreateButton>
          </React.Fragment>
        )}
      />

      <Route
        path="/form"
        render={props => (
          <Form
            {...props}
            onChange={onNoteChange}
            note={currentNote}
            onSubmit={onNoteSubmit}
          />
        )}
      />
    </div>
  );
}

export default () => (
  <Router basename="/simple-notes">
    <Route component={App} />
  </Router>
);
