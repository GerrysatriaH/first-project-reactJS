import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Halo, Gerry</h2>
      <button>Login</button>
    </div>
  );
}

export default App;