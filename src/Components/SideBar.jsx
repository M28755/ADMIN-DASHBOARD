import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ isOpen, closeSideBar }) {
    const navItems = [
        { path: '/', label: 'Dashboard', icon: 'fa-th-large', section: 'Main' },
        { path: '/employees', label: 'Employees', icon: 'fa-users', section: 'Main' },
        { path: '/attendance', label: 'Attendance', icon: 'fa-calendar-check', section: 'Main' },
        { path: '/leaves', label: 'Leave Requests', icon: 'fa-paper-plane', badge: 3, section: 'Main' },
        { path: '/departments', label: 'Departments', icon: 'fa-sitemap', section: 'Management' },
        { path: '/payroll', label: 'Payroll', icon: 'fa-wallet', section: 'Management' },
        { path: '/reports', label: 'Reports', icon: 'fa-chart-bar', section: 'Management' },
        { path: '/settings', label: 'Settings', icon: 'fa-cog', section: 'System' },
    ];

    const sections = ['Main', 'Management', 'System'];





    return (
        // If isOpen is false, add the 'collapsed' class. Otherwise, no extra class.
        <aside className={`sidebar ${!isOpen ? 'collapsed' : 'open'}`}>
            <div className="sidebar-logo">
                <div className="logo-icon">EM</div>
                <div className="logo-text">
                    <span>EmpManage</span>
                    <small>Employer Management</small>
                </div>

                <div>
                    <button className="sidebar-close-btn" onClick={closeSideBar} aria-label="Close menu">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

            </div>

            <nav className="nav-section">
                {sections.map(section => (
                    <div key={section}>
                        <div className="nav-label">{section}</div>
                        {navItems
                            .filter(item => item.section === section)
                            .map(item => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === '/'}
                                    onClick={closeSideBar}
                                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                                >
                                    <i className={`fas ${item.icon}`}></i>
                                    {item.label}
                                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                                </NavLink>
                            ))}
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <img src="https://picsum.photos/seed/admin99/80/80.jpg" alt="Admin" />
                <div className="user-info">
                    <strong>OMONDI MICHAEL OTIENO</strong>
                    <small>HR Director</small>
                </div>
                <div className="user-logout">
                    <button className='nav-item'>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Logout</span>
                    </button>

                </div>
            </div>
        </aside>
    );
}