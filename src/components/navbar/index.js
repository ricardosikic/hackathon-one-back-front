// React
import React from 'react';

// Style
import './style.sass';

// Components
import AuthNav from '../navbar/authNavigation';
import { Context } from '../../context/context';

class NavBar extends React.Component {

    render() {

        return(
           <Context.Consumer>
                {ctx => {
                    return(
                        <AuthNav loggedIn={ctx.store.isLogged} />
                    )
                }}
           </Context.Consumer>
        );
    }
}

export default NavBar;