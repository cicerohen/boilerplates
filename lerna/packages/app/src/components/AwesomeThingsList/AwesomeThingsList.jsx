import React from "react";
import styled from "styled-components/macro";

import StyledTitle from "../Title";
import List from "../List";
import ListItem from "../ListItem";

import { DEFAULT_PADDING } from "../../css.settings";

const Wrapper = styled.div`
  ${(props) =>
    props.withMargin &&
    `
    margin: ${DEFAULT_PADDING};
`}
`;

const Title = styled(StyledTitle)`
  margin-bottom: ${DEFAULT_PADDING};
`;

const AwesomeThingsList = ({
  title = "Some tools and concepts",
  things = [],
  withMargin = false,
}) => (
  <Wrapper withMargin={withMargin}>
    {title && <Title size={3}>{title}</Title>}
    <List>
      {things.map((thing) => (
        <ListItem key={thing.id}>{thing.name}</ListItem>
      ))}
    </List>
  </Wrapper>
);

export default AwesomeThingsList;
