// React
import React from 'react';

// React-router-dom
import { Route, Switch } from 'react-router-dom';

// Views
import Home from '../views/home';
import SignUp from '../views/signup';

class Routes extends React.Component {
  render() {
    return (
          <Switch>
            <Route
              path="/"
              component={Home} exact/>
            <Route
              path="/signup"
              component={SignUp} />
          </Switch>
    );
  }
}
export default Routes;