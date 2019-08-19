import React from "react";
import styled from "styled-components";
import Note from "../components/Note";

const ListContainer = styled.ul``;

export default function List({ notes }) {
  return (
    <ListContainer>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} text={note.text} />
      ))}
    </ListContainer>
  );
}
