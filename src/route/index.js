// React
import React from 'react';

// React-router-dom
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Views
import Test from '../views/Test';
import Home from '../views/Home';

class Routes extends React.Component {
  render() {
    return (
          <Switch>
            <Route
              path="/"
              component={Home} exact/>
            <Route
              path="/test"
              component={Test} />
          </Switch>
    );
  }
}
export default Routes;