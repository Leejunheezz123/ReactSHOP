import React from "react";
import TestNavi from "../components/TestNavi";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const AuthLogin = () => {
  return (
    <Wrapper>
      <TestNavi />
      <h1>AuthLogin</h1>
    </Wrapper>
  );
};

export default AuthLogin;
