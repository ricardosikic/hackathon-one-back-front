// React
import React from 'react';

// React-router-dom
import { Route, Switch } from 'react-router-dom';

// Views
import Home from '../views/home';
import SignUp from '../views/signup';
import SignIn from '../views/signin';
import BookHome from '../views/bookviews/bookshome';

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
            <Route
              path="/signin"
              component={SignIn} 
            />
            <Route
              path="/books/home"
              component={BookHome} 
            />
          </Switch>
    );
  }
}
export default Routes;