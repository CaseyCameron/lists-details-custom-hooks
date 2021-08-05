import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetail from '../details/CharacterDetail';

export default function App() {
  return (
    <Router>
      <header>
        <Link to='/'>Avatar Home</Link>
      </header>
      <Switch>
        <Route exact path='/' component={CharacterList} />
        <Route exact path='/:_id' component={CharacterDetail} />
      </Switch>
    </Router>
  );
}