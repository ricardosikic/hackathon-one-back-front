// React
import React from 'react';

// Style
import './style.sass';

// Components
import AuthNav from '../navbar/authNavigation';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if(token !== null) {
            this.setState({
                loggedIn: true
            });
        }
    }

    render() {
        const { loggedIn } = this.state;

        return(
           <AuthNav loggedIn={loggedIn} />
        );
    }
}

export default NavBar;