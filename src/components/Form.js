import React from "react";
import styled from "styled-components";
import check from "../check.svg";

const Container = styled.div`
  width: 50vw;
  margin: auto;
`;

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
`;

const SubmitButton = styled.button`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  background-color: lightgreen;
  color: #fff;
  border-radius: 50px;
  border: 2px black solid;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
`;

export default function Form({ note, onSubmit, onChange }) {
  return (
    <Container>
      <StyledForm onSubmit={onSubmit}>
        <input
          name="title"
          type="text"
          value={note.title}
          placeholder="Title"
          onChange={onChange}
        />
        <textarea
          name="text"
          value={note.text}
          placeholder="Note"
          onChange={onChange}
        />
        <SubmitButton type="submit">
          <img src={check} height="60" alt="pen" />
        </SubmitButton>
      </StyledForm>
    </Container>
  );
}
