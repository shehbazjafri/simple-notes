import React from "react";
import styled from "styled-components";
import create from "../create.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: flex;
  background-color: #474646;
  color: white;
  cursor: pointer;
  padding: 18px 0 18px 0;
  width: 100%;
  border: 1px solid black;
  text-align: left;
  outline: none;
  font-size: 24px;
`;

const Content = styled.div`
  padding: 0 18px;
  max-height: ${props => (props.active ? "100%" : 0)};
  overflow: hidden;
  text-align: left;
  background-color: #474646;
  color: white;
`;

const Spacer = styled.div`
  flex: 1;
`;

const EditButton = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 10px;
  background-color: whitesmoke;
  color: #fff;
  border-radius: 50px;
  border: 2px black solid;
  text-align: center;
`;

export default function Note({ note, selected, editNote }) {
  return (
    <Container>
      <Title>
        {note.title}
        <Spacer />
        <EditButton onClick={() => editNote(note)}>
          <img src={create} height="20" alt="pen" />
        </EditButton>
      </Title>
      <Content active={selected}>
        <p>{note.text}</p>
      </Content>
    </Container>
  );
}
