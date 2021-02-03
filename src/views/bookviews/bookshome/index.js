// React
import React from 'react';

// Components
import SearchBar from '../../../components/searchbar';

// Style
import './style.sass';

class BookHome extends React.Component {
    render() {
        return(
            <div className="books-home-container">
                <div className="books-header-home"></div>
                <SearchBar />
                {/* <Books /> */}
            </div>
        );
    }
}

export default BookHome;