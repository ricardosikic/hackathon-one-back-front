// React
import React from 'react';

// Style
import './style.sass';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchbar-container">
               <input placeholder="what book are you looking for?"></input>
            </div>
        );
    }
}

export default SearchBar;