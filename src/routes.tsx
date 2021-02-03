import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Profile from './containers/Profile';
import Repo from './containers/Repo';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Profile} />
      <Route exact path="/:username" component={Profile} />
      <Route exact path="/:username/:repo" component={Repo} />
    </BrowserRouter>
  );
};

export default Router;
