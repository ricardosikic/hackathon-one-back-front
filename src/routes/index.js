// React
import React from 'react';

// React router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

// Components
import SignIn from '../components/SignIn';


class NavigationRoutes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/sign-in">
                            <SignIn />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withRouter(NavigationRoutes);