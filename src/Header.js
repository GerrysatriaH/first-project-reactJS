import React from 'react';
import './App.css';

function Header(props) {
  return (
    <div className="card">
      <p className="title">{props.name}</p>
      <p className="content">{props.job}</p>
    </div>
  )
}

export default Header;