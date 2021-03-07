// React
import React from 'react';

// Components
import SearchBar from '../../../components/searchbar';
import Books from '../../../components/books';

// React apollo
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

// Queries
import queries from './queries';

// Style
import './style.sass';

class BookHome extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            books: []
        }
    
    }

    static getDerivedStateFromProps(props, state) {
        const { bookList: {bookList} } = props;
        if(bookList) {
            return {
                books: bookList
            }
        } else {
            return null;
        }
    }

    render() {
        const { books } = this.state;
        return(
            <div className="books-home-container">
                <div className="books-header-home"></div>
                <SearchBar />
                <Books books={books}/>
            </div>
        );
    }
}

export default compose(
    graphql(queries.bookList, { name: 'bookList' })
)(BookHome);