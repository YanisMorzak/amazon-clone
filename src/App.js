import React from "react";
import { styled } from "styled-components";

export default function App() {
  return <AppStyled>App test</AppStyled>;
}

const AppStyled = styled.div`
  background: red;
  padding: 10px;
  color: white;
`;
