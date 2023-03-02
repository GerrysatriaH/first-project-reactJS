import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header name="Gerry" job="IT Dev"/>
      <button>Login</button>
    </div>
  );
}

export default App;