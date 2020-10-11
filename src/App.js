import React from 'react';
import './App.scss';
import Topbar from './components/topbar';
import Middle from './components/middle'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
      </Router>
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
