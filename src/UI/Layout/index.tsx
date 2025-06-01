import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import { Header } from "./components/Header";

const HEADER_HEIGHT = 80;

export const Layout = () => {
  return (
    <Wrapper>
      <Header height={HEADER_HEIGHT} />
      <InnerWrapper>
        <Outlet />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const InnerWrapper = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
`;
