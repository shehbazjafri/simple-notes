import React from "react";
import styled from "styled-components";
import Note from "../components/Note";

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li``;

export default function List({ notes, onSelect, selected, editNote }) {
  return (
    <ListContainer>
      {notes.map((note, index) => (
        <ListItem onClick={() => onSelect(index)}>
          <Note
            key={index}
            note={note}
            selected={selected === index}
            editNote={editNote}
          />
        </ListItem>
      ))}
    </ListContainer>
  );
}
