// React
import React from 'react';

// Components
import SearchBar from '../../../components/searchbar';
import Books from '../../../components/books';
import LoadMoreButton from '../../../components/loadMoreButton';

// React apollo
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright';

import client from '../../../index';

// Queries
import queries from './queries';

// Style
import './style.sass';

class BookHome extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: false
        }
        this.getBooks();
    }

    getBooks = async() => {
        try {
            const resp = await client.query({
                query: queries.bookList,
                fetchPolicy: 'network-only'
              });
            if(resp) {
                const {data: { bookList }} = resp;
                this.setState({
                    books: bookList
                })
            }
        } catch(err) {
            console.log(err.message);
        }
    }

    loadMoreBooks = async() => {
        const { books } = this.state;
        let lastBookId = parseInt(books[books.length - 1].id);

        this.setState({
            isLoading: true
        })

        try {
            const resp = await client.query({
                query: queries.getMoreBooks,
                variables: { bookId: parseInt(lastBookId) },
                fetchPolicy: 'network-only'
              });
            if(resp) {
                let newBooks = [...books, ...resp.data.loadMoreBooks];
                this.setState({
                    isLoading: false,
                    books: newBooks
                })
            }
        } catch(err) {
            console.log(err.message);
        }
    }

    render() {
        const { books, isLoading } = this.state;
        return(
            <div className="books-home-container">
                <div className="books-header-home"></div>
                <SearchBar />
                <Books books={books} />
                <LoadMoreButton isLoading={isLoading} loadMoreBooks={this.loadMoreBooks} />
            </div>
        );
    }
}

export default compose(
    graphql(queries.bookList, { name: 'bookList' })
)(BookHome);