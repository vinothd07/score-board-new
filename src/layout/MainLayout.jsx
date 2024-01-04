import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <header>
        <Navbar />
      </header>

      <Outlet />
    </div>
  )
}

export default MainLayout;