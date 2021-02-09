// React
import React from 'react';

// React-bootstrap
import { Form, Button } from 'react-bootstrap';

// Context
import { Context } from '../../context/context';
 
// Style
import './style.sass';

class SignInForm extends React.Component {
    render() {
        return(
            <Context.Consumer>
                {ctx => {
                    return(
                        <Form className="signin-form">
                            <h1 className="signin-title">SIGN IN</h1>
                            <Form.Group>
                                <Form.Control name="email" onChange={e => ctx.actions.loginData(e)} type="email" placeholder="Email*" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control name="password" onChange={e => ctx.actions.loginData(e)} type="password" placeholder="Password*" />
                            </Form.Group>
                            <Button variant="primary" onClick={e => ctx.actions.signIn(e)} className="signin-button" type="submit">
                                SIGN IN
                            </Button>
                            <p>Don't have an account?, signup</p>
                        </Form>
                    );
                }}
            </Context.Consumer>
        );
    }
}

export default SignInForm;