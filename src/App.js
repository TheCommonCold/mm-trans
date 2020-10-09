import React from 'react';
import './App.scss';
import Topbar from './components/topbar';
import Middle from './components/middle'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Topbar />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
