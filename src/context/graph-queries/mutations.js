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
}

export default mutations;