import React from "react";
import styled from "styled-components/macro";

import { DEFAULT_PADDING, GREY_LIGHTER_COLOR } from "../../css.settings";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${DEFAULT_PADDING};
  background-color: ${GREY_LIGHTER_COLOR};
  color: ${(props) => props.theme.palette.secondaryTextColor};
  min-height: 80px;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.palette.primaryTextColor};
  font-size: 1.2rem;
  margin: 0.5em 0;
  > a {
    color: ${(props) => props.theme.palette.primaryTextColor};
  }
`;

const Footer = () => (
  <Wrapper>
    <Paragraph>Monorepo with Lerna</Paragraph>
  </Wrapper>
);

export default Footer;
