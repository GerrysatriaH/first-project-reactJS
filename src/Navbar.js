import React from 'react'

import './App.css';

export default function navbar() {
  return (
    <div className='navbar'>
        <h2 className='title'>NationalLibrary</h2>
        <ul className='list-menu'>
          <li className='menu'>Home</li>
          <li className='menu'>Booklist</li>
          <li className='menu'>Bookshelf</li>
        </ul>
    </div>
  )
}