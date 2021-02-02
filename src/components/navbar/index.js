// React
import React from 'react';

// React-bootstrap
import { 
    Navbar, 
    Nav,
    Form, 
    Button 
} from 'react-bootstrap';

// Style
import './style.sass';

// Images
import heart from '../../assets/images/logo/heart-home.png';

class NavBar extends React.Component {
    render() {
        return(
            <Navbar bg="transparent" className="navbar-container" expand="lg">
                <Navbar.Brand href="#home"><img className="logo" src={heart} />BOOKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">EXPLORE BOOKS</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button variant="outline-success">SIGN IN</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;