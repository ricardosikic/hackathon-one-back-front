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
}

export default queries;