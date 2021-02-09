// React
import React from 'react';

// React-bootstrap
import { 
    Navbar, 
    Nav,
    Form, 
    Button 
} from 'react-bootstrap';

// React-router
import { Link } from 'react-router-dom';

// Style
import './style.sass';

// Images
import heart from '../../assets/images/logo/heart-home.png';

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

    authenticatedNav = () => {
        const { loggedIn } = this.state;

        if(loggedIn === true) {
            return(
                <Navbar bg="transparent" className="navbar-container" expand="lg">
                    <Navbar.Brand href="#home"><img className="logo" src={heart} /><Link to="/">BOOKS</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home"><Link to="/">HOME</Link></Nav.Link>
                        <Nav.Link href="#link">EXPLORE BOOKS</Nav.Link>
                        </Nav>
                        <Form inline>
                        <Button variant="outline-success"><Link to="/signin">SIGN OUT</Link></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            );
        } else {
            return(
                <Navbar bg="transparent" className="navbar-container" expand="lg">
                    <Navbar.Brand href="#home"><img className="logo" src={heart} /><Link to="/">BOOKS</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                        <Button variant="outline-success"><Link to="/signin">SIGN IN</Link></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }

    render() {
        return(
           this.authenticatedNav()
        );
    }
}

export default NavBar;