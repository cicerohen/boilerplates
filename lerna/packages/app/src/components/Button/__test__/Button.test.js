import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import {
  render,
  cleanup,
  queryByTestId,
  fireEvent,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../../css.settings";

import Button from "../Button";

const props = {
  as: "a",
  onClick: jest.fn(),
  palette: "initial",
  size: "small",
  disabled: false,
  children: <div>text</div>,
};

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={theme.default}>{children}</ThemeProvider>;
};

describe("<Button />", () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(<Button {...props} />, { wrapper: AllProviders });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    expect(queryByTestId(component.container, "Button")).toBeTruthy();
    expect(queryByTestId(component.container, "Button")).toContainHTML(
      "<div>text</div>"
    );
  });

  it("should call onClick prop when button is clicked", () => {
    fireEvent.click(queryByTestId(component.container, "Button"));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick prop when button is disabled", () => {
    component.rerender(<Button {...props} as="button" disabled={true} />);
    fireEvent.click(queryByTestId(component.container, "Button"));
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
