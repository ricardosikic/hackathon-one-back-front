// React
import React from 'react';

// Context
import { Context } from '../../context/context';

// React-bootstrap
import { Button, Container } from 'react-bootstrap';

// Style
import './style.sass';

class Home extends React.Component {
    render() {
        return(
            <Context.Consumer>
                {context => {
                    return(
                        <Container fluid className="home-container">
                            <h1 className="text-center">Hola Vecina!</h1>
                            <Container className="home-button-container">
                                <Button className="home-button">Sign in</Button>
                                <Button className="home-button">Sign up</Button>
                            </Container>
                        </Container>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default Home;