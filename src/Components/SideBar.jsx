import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBar({isOpen}){

    const navItems =[
    { path: '/', label: 'Dashboard', icon: 'fa-th-large', section: 'Main' },
    { path: '/employees', label: 'Employees', icon: 'fa-users', section: 'Main' },
    { path: '/attendance', label: 'Attendance', icon: 'fa-calendar-check', section: 'Main' },
    { path: '/leaves', label: 'Leave Requests', icon: 'fa-paper-plane', badge: 3, section: 'Main' },
    { path: '/departments', label: 'Departments', icon: 'fa-sitemap', section: 'Management' },
    { path: '/payroll', label: 'Payroll', icon: 'fa-wallet', section: 'Management' },
    { path: '/reports', label: 'Reports', icon: 'fa-chart-bar', section: 'Management' },
    { path: '/settings', label: 'Settings', icon: 'fa-cog', section: 'System' },
    ];


    //grouping item in section

    const sections = ['Main', 'Management', 'System']
    return(
        <>
        <aside className={`sidebar ${isOpen? 'open': 'collapsed'}`}>
            <div className='sidebar-logo'>
                <div className="logo-icon">
                   EM
                </div>
                <div className="logo-text">
                    <div className='logo-company'>
                        <strong><span>E</span>.<span>M</span>.<span>S</span></strong>
                    </div>
                    <div className='text-muted'>
                          <small>Employee Management System</small>
                    </div>
                  
                </div>

            </div>
            <div className="nav-section">
                { sections.map(section =>(
                    <div key={section}>
                        <div className="nav-label">
                           <div className='line-left'></div> {section} <div className='line-right'></div>
                            </div>
                        {navItems.filter(item => item.section === section).map(item =>(
                            <NavLink 
                              key={item.path}
                              to={item.path}

                              className={({isActive}) => isActive? 'nav-item active' : 'nav-item'}
                              >

                                <i className= {`fas ${item.icon}`}></i>
                                {item.label}
                                {item.badge && 
                                   <span className='nav-badge'>{item.badge}</span>
                                }
                              </NavLink>
                        ))}
                    </div>
                ))}
            </div>


            <div className="sidebar-footer">
                <div className='user-profile'>
                <img className='h-[40px] w-[40px] rounded-full object-cover' src="https://picsum.photos/seed/admin99/80/80.jpg" alt="Admin" />
                <div className="user-info">
                    <strong className='text-sm'>OMONDI MICHAEL OTIENO</strong>
                    <small>HR Director</small>
                </div>

                </div>
                <div className="logout-container">
                <button className='logout-btn' title="Logout">
                    <i className='fas fa-sign-out-alt'></i>
                    <span>Logout</span>
                </button>
                </div>

            </div>
        </aside>

        </>
    )
}

export default SideBar