// React
import React from 'react';

// React router dom
import { Link } from 'react-router-dom';

// Style
import './style.sass';

import homeImage from '../../assets/images/home/home-image.png';

class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <div className="home-content-left">
                    <h1 className="find-books-text">FIND BOOKS</h1>
                    <h1 className="find-books-text">YOU LIKE</h1>
                    <button><Link to='/test'>SIGN UP</Link></button>
                </div>
                <div className="home-image-picture">
                    <img src={homeImage} />
                </div>
                <div className="home-figure">

                </div>
            </div>
        );
    }
}

export default Home;