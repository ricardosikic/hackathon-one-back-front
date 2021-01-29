// React
import React from 'react';

// Context
import { Context } from '../../context/context';

// React-bootstrap
import { Button, Container } from 'react-bootstrap';

// Style
import './style.sass';

const homeImage = require('../../assets/home/home-image.png').default;

class Home extends React.Component {
    render() {
        return(
            <div fluid className="home-container">
                <div className="home-content-left">
                    <h1 className="find-books-text">FIND BOOKS</h1>
                    <h1 className="find-books-text">YOU LIKE</h1>
                    <Button>SIGN UP</Button>
                </div>
                <div className="home-image-picture">
                    <img src={homeImage ? homeImage : ''} />
                </div>
                <div className="home-figure">

                </div>
            </div>
        );
    }
}

export default Home;