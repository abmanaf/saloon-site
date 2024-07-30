import React, { useState } from 'react';
import "./NavBat.css"
import { Link } from 'react-router-dom';

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className='header'>
        <div className='site-logo'>
          <img src="/assets/images/lashes-logo-black.jpg" alt="logo" />
        </div>
        <div className='header-items'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Book">Book Appointment</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
          </ul>
        </div>
        <div className='menu-icon' onClick={toggleSidebar}>
          <img src="/assets/images/icon-menu.svg" alt="icon-menu" />
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className='close-button' onClick={toggleSidebar}><img src="public/assets/images/icon-menu-close.svg" alt="" /></button>
        <ul>
          <li><Link  to="/">Home</Link></li>
          <li><Link to="/Book">Book Appointment</Link></li>
          <li><Link to="/SignIn">Sign In</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
