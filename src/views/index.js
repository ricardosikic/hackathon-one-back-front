// React
import React from 'react';

// Context
import { Context } from '../context/context';

// React-bootstrap
import { Button } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return(
            <Context.Consumer>
                {context => {
                    console.log(context)
                    return(
                        <div>
                            <h1>{context.text}</h1>
                            <Button>Boton</Button>
                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default Home;