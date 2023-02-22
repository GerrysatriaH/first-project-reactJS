import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  let user = "Gerry";
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Halo, { user }</h2>
      <button>Login</button>
    </div>
  );
}

export default App;