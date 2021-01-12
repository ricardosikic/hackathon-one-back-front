// React
import React from 'react';

// Context
import { Context } from '../context/context';

class Home extends React.Component {
    render() {
        return(
            <Context.Consumer>
                {context => {
                    console.log(context)
                    return(
                        <h1>{context.text}</h1>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default Home;