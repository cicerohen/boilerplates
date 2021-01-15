import React from "react";
import styled from "styled-components/macro";

import { wrapperBase, initial, primary } from "./styles";

const Wrapper = styled.section`
  ${wrapperBase};
  ${(props) => props.palette === "initial" && initial};
  ${(props) => props.palette === "primary" && primary};
`;

const Card = ({ palette = "initial", padding = true, children, className }) => (
  <Wrapper className={className} palette={palette} padding={padding}>
    {children}
  </Wrapper>
);

export default Card;
