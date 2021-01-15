import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../components/GlobalStyles";
import HomeViewContainer from "../containers/views/HomeViewContainer";
import MoreViewContainer from "../containers/views/MoreViewContainer";

import { theme } from "../css.settings";

import * as routes from "../routes";

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path={routes.HOME}>
            <HomeViewContainer />
          </Route>
          <Route exact path={routes.MORE}>
            <MoreViewContainer />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppContainer;
