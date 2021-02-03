// React
import React from 'react';

// React-bootstrap
import { Form, Button } from 'react-bootstrap';

// React-router-dom
import { Link } from 'react-router-dom';
 
// Style
import './style.sass';

class SignInForm extends React.Component {
    render() {
        return(
            <Form className="signin-form">
                <h1 className="signin-title">SIGN IN</h1>
                <Form.Group>
                    <Form.Control type="email" placeholder="Email*" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Password*" />
                </Form.Group>
                <Button variant="primary" className="signin-button" type="submit">
                    <Link to="/books/home">SIGN IN</Link>
                </Button>
                <p>Don't have an account?, signup</p>
            </Form>
        );
    }
}

export default SignInForm;