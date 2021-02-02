// React
import React from 'react';

// React-bootstrap
import { Form, Button } from 'react-bootstrap';

// Style
import './style.sass';

class SignUpForm extends React.Component {
    render() {
        return(
            <Form className="signup-form">
                <h1 className="signup-title">SIGN UP</h1>
                <Form.Group>
                    <Form.Control type="email" placeholder="Name*" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="email" placeholder="Email*" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="password" placeholder="Password*" />
                </Form.Group>
                <Button variant="primary" className="signup-button" type="submit">
                    SIGN UP
                </Button>
            </Form>
        );
    }
}

export default SignUpForm;