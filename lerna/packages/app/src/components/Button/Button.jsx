import React from "react";
import styled from "styled-components/macro";

import {
  base,
  disabled,
  size,
  initialFilled,
  initialOutlined,
  primaryFilled,
  primaryOutlined,
  secondaryFilled,
  secondaryOutlined,
} from "./styles";

const Wrapper = styled.button`
  ${base}
  ${disabled}
  ${size}
  ${(props) =>
    props.palette === "initial" && props.variant === "filled" && initialFilled};
  ${(props) =>
    props.palette === "initial" &&
    props.variant === "outlined" &&
    initialOutlined};
  ${(props) =>
    props.palette === "primary" && props.variant === "filled" && primaryFilled};
  ${(props) =>
    props.palette === "primary" &&
    props.variant === "outlined" &&
    primaryOutlined};
  ${(props) =>
    props.palette === "secondary" &&
    props.variant === "filled" &&
    secondaryFilled};
  ${(props) =>
    props.palette === "secondary" &&
    props.variant === "outlined" &&
    secondaryOutlined};
`;

const Button = ({
  children,
  palette = "initial",
  variant = "filled",
  size = "small",
  disabled = false,
  as = "button",
  ...rest
}) => (
  <Wrapper
    data-testid="Button"
    palette={palette}
    variant={variant}
    size={size}
    as={as}
    disabled={disabled}
    {...rest}
  >
    {children}
  </Wrapper>
);

export default React.memo(Button);
