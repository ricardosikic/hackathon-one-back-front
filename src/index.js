import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Context Provider
import AppProvider from '../src/context/context';

// React-bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// React router dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
{/*     <AppProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
{/*     </AppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
