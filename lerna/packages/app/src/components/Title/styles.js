import { css } from "styled-components";

export const wrapperBase = css`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  line-height: 2;
`;

export const size = css`
  ${(props) =>
    props.size === 1 &&
    `
    font-size: 3.6rem;
  `}
  ${(props) =>
    props.size === 2 &&
    `
    font-size: 2.1rem;
  `}
  ${(props) =>
    props.size === 3 &&
    `
    font-size: 1rem;
  `}
`;
