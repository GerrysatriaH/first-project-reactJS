import React from 'react'

import '../App.css';
import './Navbar.css';
import logo from '../../img/logo_ipusnas.png';
import search from '../../img/search_icon.png';
import notification from '../../img/notif_icon.png';
import user_icon from '../../img/user_icon.png';

export default function navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo-nav" className='logo'/>
        <ul className='list-menu'>
          <li className='menu'>Home</li>
          <li className='menu'>Library</li>
          <li className='menu'>Bookshelf</li>
          <li className='menu'>Feeds</li>
        </ul>
        <form>
          <input type="text" name="keyword" placeholder='Search Here'></input>
          <button>
            <img src={search} alt='search'></img>
          </button>
        </form>
        <button>
          <img src={notification} alt='notif_icon'></img>
        </button>
        <button>
          <img src={user_icon} alt='user_icon'></img>
        </button>
    </div>
  )
}
