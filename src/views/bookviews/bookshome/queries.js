import gql from 'graphql-tag';

const queries = {
    bookList: gql`
     query bookList {
         bookList {
            id
            coverImage
            title
            description
            author
            rating
         }
     }
    `,
    getMoreBooks: gql`
     query getMoreBooks($bookId: ID!) {
         loadMoreBooks(bookId: $bookId) {
            id
            coverImage
            author
            title
         }
     }
    `,

}

export default queries;