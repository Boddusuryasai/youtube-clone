import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sidebar from './Sidebar';

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  

  const sidebarStyles = {
    position: 'fixed',
    top: '80px',
    left: isMenuOpen ? '0' : '-250px',
    width: '250px',
    height: '100%',
    backgroundColor: '#fff',
    transition: 'left 0.3s ease',
    marginRight: isMenuOpen ? '0' : '-250px',
  };

  const outletStyles = {
    marginLeft:  0,
    overflowY: 'auto',
    transition: 'margin-left 0.3s ease',
  };

  return (
    <div className='flex flex-row'>
      <div style={sidebarStyles}>
        <Sidebar />
      </div>
      <div style={outletStyles}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
