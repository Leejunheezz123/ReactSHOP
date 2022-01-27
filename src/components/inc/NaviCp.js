import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import axios from "axios";

const Wrapper = styled.div``;

const NaviCp = () => {
  //컴포넌트가 화면에서 실행될때 사라지는 함수.
  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get("/json/tree.json");
      console.log(data);
    };
    init();
    console.log("컴포넌트가 시작됨");
    return () => {
      console.log("화면에서 사라짐");
    };
  }, []);
  return <Wrapper></Wrapper>;
};

export default React.memo(NaviCp);
