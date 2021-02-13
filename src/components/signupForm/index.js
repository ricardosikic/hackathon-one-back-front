// React
import React from 'react';

// React-bootstrap
import { Form, Button } from 'react-bootstrap';

// Context
import { Context } from '../../context/context';

// Style
import './style.sass';

class SignUpForm extends React.Component {
    render() {
        return(
            <Context.Consumer>
                {ctx => {
                    return(
                        <Form className="signup-form">
                            <h1 className="signup-title">SIGN UP</h1>
                            <Form.Group>
                                <Form.Control name="name" onChange={e => ctx.actions.signUpData(e)} type="text" placeholder="Name*" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control name="email" onChange={e => ctx.actions.signUpData(e)} type="email" placeholder="Email*" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control name="password" onChange={e => ctx.actions.signUpData(e)} type="password" placeholder="Password*" />
                            </Form.Group>
                            <Button variant="primary" onClick={e => ctx.actions.signUp(e)} className="signup-button" type="submit">
                                SIGN UP
                            </Button>
                        </Form>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default SignUpForm;