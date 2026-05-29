import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './SideBar.css';


export default function Layout() {
  // Default to true so sidebar is visible on desktop
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSideBar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false)
    }

  }


  return (
    <div className="layout-wrapper">
      <Sidebar isOpen={sidebarOpen} closeSideBar={closeSideBar} />

      <div className={`main-content ${!sidebarOpen ? 'expanded' : ''}`}>
        <header className="topbar">
          <button className="topbar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <i className="fas fa-bars"></i>
          </button>

          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search employees, departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="topbar-actions">
            <button className="topbar-btn" aria-label="Notifications">
              <i className="fas fa-bell"></i>
              <span className="dot"></span>
            </button>
            <button className="topbar-btn" aria-label="Messages">
              <i className="fas fa-envelope"></i>
            </button>
          </div>
        </header>

        <Outlet context={{ searchQuery }} />
      </div>




    </div>
  );
}