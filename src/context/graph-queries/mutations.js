// gql
import gql from 'graphql-tag';

const mutations = {
    signinUser: gql`
      mutation signinUser($email: String!, $password: String!) {
        signinUser(input: {
            credentials: {
                email: $email,
                password: $password
            }
        }) {
            token
        }
      }
    `,
    createUser: gql`
     mutation createUser($firstName: String!, $email: String!, $password: String!) {
       createUser(input: {
         firstName: $firstName
         authProvider: {
           credentials: {
             email: $email,
             password: $password
           }
         }
       }) {
         user {
           firstName
         }
         sessionToken
       }
     }
    `,
    signoutUser: gql`
     mutation signoutUser{
      signoutUser(input:{}) {
        clientMutationId
      }
     }
    `,
}

export default mutations;