import React from 'react';
import './App.css';

function Header(props) {
  return (
    <div className="card bg-black">
      <p className="title">{props.name}</p>
      <p className="content">{props.job}</p>
    </div>
  )
}

export default Header;