// This file store the development and production variables

const prod = {
    url: {
        API_URL: 'https://hackathon-one-api.herokuapp.com/graphql'
    }
}

const dev = {
    url: {
        API_URL: 'http://localhost:3000/graphql'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;