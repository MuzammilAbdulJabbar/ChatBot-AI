import React from 'react';
import './Header.css';
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle';

function Header(props) {
  return (
    <header className='Header'>
 <DrawerToggle clicked={props.drawerToggleClicked}/>
 <span>CHATBOT</span>

    </header>
  )
}

export default Header