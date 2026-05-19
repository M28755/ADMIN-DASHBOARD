import React , {useState} from "react"

import SideBar  from "../Components/SideBar"
import './SideBar.css'

const Layout = () => {

  const [sidebarOpen , setSidebarOpen] = useState(true)

  const toggleSidebar = ()=>{
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <>
    <div className="layout-wrapper">
      <SideBar isOpen={sidebarOpen}/>

      <div className= {`main-content ${!sidebarOpen ? 'expanded': ''}`}>
        {/* Topbar */}
        <header className= "topbar">
          <button className= "topbar-toggle" onClick={toggleSidebar} aria-label = "Toggle sidebar">
            <i className="fas fa-bars"></i>
          </button>

          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search employees, departments ..." />
            
          </div>

          <div className="topbar-actions">
            <button className="topbar-btn" aria-label="Notifications">
              <i className="fas fa-bell"></i>
              <span className="notification-dot"></span>

            </button>
            <button className="topbar-btn" aria-label="Messages">
              <i className="fas fa-envelope"></i>
           

            </button>
          </div>

        </header>

      </div>

    </div>
    
    
    </>
  )
}

export default Layout