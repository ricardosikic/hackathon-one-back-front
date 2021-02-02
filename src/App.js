// React
import React, { Fragment } from 'react';

// Components
import NavBar from './components/navbar';

// Routes
import Routes from './routes';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes />
    </Fragment>
  );
}

export default App;
