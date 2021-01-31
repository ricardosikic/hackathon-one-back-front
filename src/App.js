// React
import React, { Fragment } from 'react';

// Components
import Home from '../src/views/Home/index';
import NavBar from './components/navbar';

function App() {
  return (
    <Fragment>
      <Home />
      <NavBar />
    </Fragment>
  );
}

export default App;
