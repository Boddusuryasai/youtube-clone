import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sidebar from './Sidebar';

const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const marginLeft = isMenuOpen ? '250px' : '0';

  return (
    <div className='flex flex-row'>
      <div style={{ position: 'fixed', top: "80px", left: 0 }}>
        <Sidebar />
      </div>
      <div style={{ marginLeft: marginLeft, overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
