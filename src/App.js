import React from 'react';
import './App.scss';
import Topbar from './components/topbar';
import Middle from './components/middle'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TempSite from './components/tempSite';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/secret">
          <Topbar />
          <Middle />
          <Footer />
        </Route>
        <Route path="/">
          <TempSite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;