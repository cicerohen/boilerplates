import React from "react";
import styled from "styled-components/macro";

import StyledTitle from "../Title";

import { DEFAULT_PADDING } from "../../css.settings";

const Title = styled(StyledTitle).attrs((props) => ({
  ...props,
  forwardAs: "h1",
  size: 2,
}))`
  text-transform: lowercase;
  color: #fff;
`;

const Wrapper = styled.header`
  min-height: 120px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primaryColor};
  padding: ${DEFAULT_PADDING};
`;

const Header = () => (
  <Wrapper>
    <Title>Front-end boilerplate</Title>
  </Wrapper>
);

export default Header;
