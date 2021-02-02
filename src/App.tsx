import React from 'react';
import Header from './components/Header';
import Router from './routes';
import './styles/globalStyles.module.scss';

const App: React.FC = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
