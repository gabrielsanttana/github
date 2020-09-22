import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/:username" component={Main} />
      <Route exact path="/:username/:repo" component={Main} />
    </BrowserRouter>
  );
};

export default Router;
