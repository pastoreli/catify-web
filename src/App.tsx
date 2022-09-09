import React from 'react';
import { Header } from 'components';
import './style/index.css';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
