import React from "react";
import styled from "styled-components/macro";
import Header from "../Header";
import Footer from "../Footer";
import StyledContainer from "../Container";

import { DEFAULT_PADDING } from "../../css.settings";

const Wrapper = styled.div``;

const Main = styled(StyledContainer).attrs((props) => ({
  ...props,
  as: "main",
}))`
  min-height: 900px;
  margin: 0 auto;
  padding: ${DEFAULT_PADDING} 0;
  max-width: 800px;
  padding-left: ${DEFAULT_PADDING};
  padding-right: ${DEFAULT_PADDING};
`;

const View = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default View;
