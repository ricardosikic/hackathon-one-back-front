// React
import React , { useState, useEffect } from 'react';

// React-router-dom
import { Route, Redirect } from 'react-router-dom';

// Context
import { Context } from '../../context/context';

class PrivateRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToken: false
        }
    }

    redirectToSignIn = () => {
        <Redirect to="/" />
    }

    render() {
        const {component: Component, ...rest} = this.props;
        const { isToken } = this.state;

        return(
            <Context.Consumer>
                {ctx  => {
                    return(
                        <Route {...rest} render={props => (
                            ctx.store.isLogged ? <Component {...props} /> : this.redirectToSignIn()
                         )} 
                        />
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default PrivateRoute;