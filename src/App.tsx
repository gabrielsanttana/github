import React from 'react';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
