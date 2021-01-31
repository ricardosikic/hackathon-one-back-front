// React
import React from 'react';

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
                    <button>SIGN UP</button>
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