import React, { Component } from 'react';
import Header from './components/Header';
import Cursors from './components/Cursors';
import Footer from './components/Footer';
import cursors from './data/cursors.json';

class App extends Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Cursors cursors={cursors} />
        <Footer />
      </div>
    );
  }
}

export default App;
