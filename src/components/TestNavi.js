import React from "react";
import { Link } from "react-router-dom"; //react 라우터 부르기
import styled from "@emotion/styled"; //스타일드 컴포넌트 부르기

const NaviWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  background-color: #eee;
  border-bottom: 1px solid #999;
  list-style-type: none;
`;
const Navi = styled(Link)`
  padding: 0.5em;
  display: inline-block;
`;

const TestNavi = () => {
  return (
    <NaviWrap>
      <li>
        <Navi to="/">Main</Navi>
      </li>
      <li>
        <Navi to="/login">Login</Navi>
      </li>
      <li>
        <Navi to="/cart">Cart</Navi>
      </li>
      <li>
        <Navi to="/info">My Info</Navi>
      </li>
      <li>
        <Navi to="/order">My Order</Navi>
      </li>
      <li>
        <Navi to="/withdrawal">My WithDrawal</Navi>
      </li>
      <li>
        <Navi to="/pay">Payment</Navi>
      </li>
      <li>
        <Navi to="/prd">Product List</Navi>
      </li>
      <li>
        <Navi to="/prd/1">Product View</Navi>
      </li>
    </NaviWrap>
  );
};

export default TestNavi;
