// React
import React from 'react';

// React-router-dom
import { Route, Switch } from 'react-router-dom';

// Views
import Home from '../views/home';
import SignUp from '../views/signup';
import SignIn from '../views/signin';
import BookHome from '../views/bookviews/bookshome';
import Dashboard from '../views/admin/dashboard';

// Routes private && public
import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

class Routes extends React.Component {

  render() {
    return (
          <Switch>
            <PublicRoute component={Home} restricted={false} path="/" exact />
            <PublicRoute component={SignIn} restricted={true} path="/signin" exact />
            <PublicRoute component={SignUp} restricted={true} path="/signup" exact />
            <PrivateRoute component={BookHome} path="/books/home" exact />
            <PrivateRoute component={Dashboard} path="/admin/dashboard" exact />
          </Switch>
    );
  }
}
export default Routes;