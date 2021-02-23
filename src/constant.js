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

console.log(process.env.REACT_APP_API_URI || 'http:localhost:3000')
export const config = process.env.NODE_ENV === 'development' ? dev : prod;