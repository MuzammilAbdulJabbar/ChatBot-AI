import React from 'react';
// import Sidebar from '../Sidebar';
import './DrawerToggle.css';
// import Sidebar from '../Sidebar';

function DrawerToggle(props) {
  return (
    
    <button className='Drawer' onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </button>
   
  );
}

export default DrawerToggle;
