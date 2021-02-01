// React
import React, { Fragment } from 'react';

// Components
import Home from '../src/views/Home/index';
import NavBar from './components/navbar';

// Routes
import Routes from './route';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes/>
    </Fragment>
  );
}

export default App;
