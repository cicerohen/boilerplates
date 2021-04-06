import React from "react";

import { ComponentExample, useHookExample } from "@monorepo/shared";

import View from "../../components/View";
import AwesomeThingsList from "../../components/AwesomeThingsList";

import Hero from "../../components/Hero";

const awesomeThings = [
  {
    id: 1,
    name: "reactjs",
  },
  {
    id: 4,
    name: "styled-components",
  },
  {
    id: 5,
    name: "jest",
  },
  {
    id: 6,
    name: "react-Testing-library",
  },
  {
    id: 7,
    name: "containers/components",
  },
  {
    id: 8,
    name: "separation of concerns",
  },
  {
    id: 9,
    name: "Monorepo/Lerna",
  },
];

const HomeViewContainer = () => {
  const example = useHookExample();
  return (
    <View>
      <Hero title="Monorepo with Lerna" />
      <ComponentExample />
      {example}
      <AwesomeThingsList withMargin things={awesomeThings} />
    </View>
  );
};

export default HomeViewContainer;
