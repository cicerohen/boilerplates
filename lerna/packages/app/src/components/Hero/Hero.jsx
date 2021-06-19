import React from "react";
import styled from "styled-components/macro";

import StyledButtom from "../Button";
import Card from "../Card";
import StyledTitle from "../Title";

import { DOUBLE_PADDING } from "../../css.settings";

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${DOUBLE_PADDING};
`;

const Buttons = styled.div`
  display: flex;
`;

const Buttom = styled(StyledButtom).attrs((props) => ({
  ...props,
  forwardedAs: "a",
  palette: "secondary",
}))``;

const Title = styled(StyledTitle)`
  text-align: center;
`;

const Hero = ({ title, subtitle }) => (
  <Wrapper>
    <Title size={1}>{title}</Title>
    <Title size={3} forwardedAs="h2">
      {subtitle}
    </Title>
    <Buttons>
      <Buttom href="/more">Saiba mais</Buttom>
      <Buttom href="/admin">Dashboard</Buttom>
    </Buttons>
  </Wrapper>
);

export default Hero;
