import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListDisplay from '../list/ListDisplay';
import DetailsDisplay from '../details/DetailsDisplay';
import Header from '../header/Header'

export default function App() {
  return (<Router>
    <Header />
    <Switch>
      <Route exact path="/" component={ListDisplay} />
      <Route path="/breed/:id" component={DetailsDisplay} />
    </Switch>
  </Router>);
}
