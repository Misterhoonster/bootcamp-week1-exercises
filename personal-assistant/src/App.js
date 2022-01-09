import React from 'react'

import TodoPage from './containers/TodoPage';
import GreetingPage from './containers/GreetingPage';
import NavBar from './components/NavBar';

import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/todo">
        <TodoPage />
      </Route>
      <Route path="/">
        <GreetingPage />
      </Route>
    </Switch>
  </div>
);

export default App
