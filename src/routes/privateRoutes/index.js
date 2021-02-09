// React
import React , { useState, useEffect } from 'react';

// React-router-dom
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token !== null) {
            setLoggedIn(true);
        }
    }, []);

    const redirectToSignIn = () => {
        <Redirect to="/signin" />
    }

    return(
        <Route {...rest} render={props => (
            loggedIn ? <Component {...props} /> : redirectToSignIn()
         )} 
        />
    )
}

export default PrivateRoute;