// React
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// History
import history from './history';

// Context Provider
import AppProvider from '../src/context/context';

// React-bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// React router dom
import { BrowserRouter } from 'react-router-dom';

// Environments variables
import { config } from '../src/constant';

// 1
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// 2
const httpLink = createHttpLink({
  uri: config.url.API_URL
});

// 3
const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('token');
   // return the headers to the context so httpLink can read them
   return {
     headers: {
       ...headers,
       authorization: token ? `Bearer ${token}` : "",
     }
   }
});


// 4
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AppProvider history={history}>
            <App />
        </AppProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
