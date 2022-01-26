import React from "react";
import TestNavi from "../components/TestNavi";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Main = () => {
  return (
    <Wrapper>
      <TestNavi />
      <h1>Main</h1>
    </Wrapper>
  );
};

export default Main;
