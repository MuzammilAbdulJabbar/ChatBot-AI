import React, { useState } from 'react';
import './Sidebar.css';


import Aux from '../../container/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
// import NewChat from '../Sidebar/NewChat';
import 'primeicons/primeicons.css';
import Chatbox from '../Chatbox/Chatbox';
        

function Sidebar(props) {
    const [newChat,currentChat]= useState(0)
    function clickHandler(){
        currentChat((prevIndex) => prevIndex + 1);
    }
    const containers = [
        <div key="container1"><Chatbox/></div>,
        <div key="container2"><Chatbox/></div>,
        <div key="container3"><Chatbox/></div>
      ];
    
  let attachedClasses = ['Sidebar','Close'];
    if (props.open) {
        attachedClasses = ['Sidebar', 'Open'];
    }
    return (
        <Aux>
            
            <Backdrop show={props.open} clicked={props.closed}/>
            <aside className='Sidebar MobileView'>
            {/* {newChat && <Chatbox/>} */}
            <button className='NewChat' onClick={clickHandler}> <i className=" pi pi-plus"></i>New Chat</button>
            {containers[newChat % containers.length]}
            <hr className='hr'></hr>
            <button className='Clear'> <i class="fa fa-trash" aria-hidden="true"></i>Clear Conversation</button> 
            <button className='logout'><i class="pi pi-sign-out"></i>Log out</button>   
            </aside>
            <aside className={attachedClasses.join(' ')} onClick = {props.closed}>
            </aside>
        </Aux>
    );
};
export default Sidebar