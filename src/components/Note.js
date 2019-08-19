import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  background-color: #474646;
  color: white;
  cursor: pointer;
  padding: 18px;
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
  transition: all 0.3s ease-out;
  background-color: #474646;
  color: white;
`;

export default function Note({ note, selected }) {
  return (
    <Container>
      <Title>{note.title}</Title>
      <Content active={selected}>
        <p>{note.text}</p>
      </Content>
    </Container>
  );
}
