import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListDisplay from '../list/ListDisplay';
import DetailsDisplay from '../details/DetailsDisplay';
import Header from '../header/Header';
import { ThemeProvider } from '../../context/themeContext'

export default function App() {
  return (<Router>
    <ThemeProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={ListDisplay} />
        <Route path="/breed/:id" component={DetailsDisplay} />
      </Switch>
    </ThemeProvider>
  </Router>);
}
