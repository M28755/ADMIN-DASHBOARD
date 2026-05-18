import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideBar.css';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';



const SideBar = () => {



    const [isOpen, setIsOpen] = useState(false);            
    const toggleSidebar = () =>{
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () =>{
            if(window.innerWidth < 768 && window.scrollY === 0){
                setIsOpen(false);

            }
        };
        window.addEventListener('scroll', handleScroll);
        return() =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    
    
    
    return (
        <>
        {/*Mobile Toggle Button */} 
        <button className="toggle-btn" onClick={toggleSidebar}>
            <span className="material-symbols-outlined">
                 ☰
            </span>
        </button>
        <div className={`sidebar vh-100 ${isOpen ? 'open' : ''}`} style={{
            width: '250px'
        }}>
            <div className="sidebar-header">
               <h2>EMS Portal</h2>
            </div>
            <hr />
            <div className="sidebar-body">
                <nav>
                    <ul className="sidebar-nav">
                        <li><Link to="/dashboard" className="nav-link ">Company Dashboard</Link></li>
                        <li> <Link to="/self-service-portal" className="nav-link">Employee Portal</Link></li>
                        <li><Link to="/employee-info" className="nav-link">Employee Info</Link> </li>
                        <li> <Link  to="/attendance" className="nav-link">Attendance</Link></li>
                        <li><Link to="/recruitment" className="nav-link">Recruitment</Link></li>
                        
                        <li> <Link to="/performance" className="nav-link">Performance </Link></li>
                        <li><Link to="/analytics-and-reports" className="nav-link">Analytics and Reports</Link></li>
                        <li> <Link to="/logout" className="nav-link">Logout</Link> </li>
                    </ul>
                </nav>
            </div>

        </div>
        
        
        </>
        
    )
}
export default SideBar;