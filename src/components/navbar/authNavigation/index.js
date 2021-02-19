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

// Context 
import { Context } from '../../../context/context';

// Images
import heart from '../../../assets/images/logo/heart-home.png';

class AuthNav extends React.Component {

    authenticatedNav = (loggedIn) => {
        return(
            <Context.Consumer>
                { ctx => {
                    return(
                        (loggedIn) ? (
                            <Navbar bg="transparent" className="navbar-container" expand="lg">
                                    <Navbar.Brand href="#home"><img className="logo" src={heart} /><Link to="/">BOOKS</Link></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                        <Nav.Link href="#home"><Link to="/">HOME</Link></Nav.Link>
                                        <Nav.Link href="#link">EXPLORE BOOKS</Nav.Link>
                                        </Nav>
                                        <Form inline>
                                        <Button onClick={e => ctx.actions.signOut(e)} variant="outline-success">SIGN OUT</Button>
                                        </Form>
                                    </Navbar.Collapse>
                            </Navbar>
                
                        ) : (
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
                        )
                    )
                
                }}
            </Context.Consumer>
        )
       
    }
    
    render() {
        const { loggedIn } = this.props;
   
        return(
            this.authenticatedNav(loggedIn)
        );
    }
}

export default AuthNav;