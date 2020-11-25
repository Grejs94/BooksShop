import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { mainRoutes } from "assets/routes";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          {mainRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
