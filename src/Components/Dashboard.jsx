import React, { useEffect, useState } from 'react';
import { initialLeaveRequests, departments, employees, activities } from '../data/dashboardData'
import './Dashboard.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement,



} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2'
//import { color, toPadding } from 'chart.js/helpers'

//registering chart.js modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
)

function Dashboard() {

    //interactive leave requests
    const [leaves, setLeaves] = useState(initialLeaveRequests)
    //toast notification
    const [toast, setToast] = useState({
        show: false,
        msg: '',
        type: 'info'
    })
    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast({
                ...toast,
                show: false
            }), 3000)

            return () => clearTimeout(timer)
        }
    }, [toast])
    const showToast = (msg, type = 'info') => {
        setToast({ show: true, msg, type });
    }
    const HandleLeaveAction = (id, status) => {
        setLeaves(prevLeaves => {
            prevLeaves.map(l => (l.id === id ? { ...l, status } : l))

        });

        const req = leaves.find(l => l.id === id);

        const msg = status === 'approved' ? `Approved leave for ${req.name} ` : `Rejected leave for ${req.name} `

        showToast(msg, status === 'approved' ? 'success' : 'error');
    }

    //chart data configuration
    const AttendanceChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'San'],
        datasets: [
            {
                labels: 'Present',
                data: [215, 220, 218, 222, 218, 140, 45],
                borderColor: '#34D399',
                backgroundColor: 'rgba(52,211,153,0.08)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#34D399',
                pointBorderWidth: 0
            },
            {
                labels: 'Absent',
                data: [12, 8, 14, 6, 15, 18, 5],
                borderColor: '#F87171',
                backgroundColor: 'rgba(52,211,153,0.08)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#F87171',
                pointBorderWidth: 0
            },
            {
                label: 'On Leave',
                data: [20, 19, 15, 19, 14, 89, 197], borderColor: '#FBBF24',
                backgroundColor: 'rgba(251,191,36,0.06)', fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#FBBF24', pointBorderWidth: 0
            }


        ]
    };
    const ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    color: '#6B7084',
                    font: {
                        size: 11,
                        family: 'DM Sans'
                    },
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 6,
                    padding: 16

                }
            }
        },
        scales: {
            x: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: { color: '#6B7084', font: { size: 11 } }
            },
            y: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: { color: '#6B7084', font: { size: 11 } }
            }
        },
        interaction: { itersect: false, mode: 'index' }
    }

    const DeptChartData = {
        labels: departments.map(d => d.name),
        datasets: [{
            data: departments.map(d => d.count),
            backgroundColor: departments.map(d => d.color),
            borderWidth: 0,
            hoverOffset: 8
        }]
    };
    const PendingLeaves = leaves.filter(l => l.status === 'pending');



    return (
        <>
            <main className="page-content">

                {/* Toast Notification */}
                {toast.show && (
                    <div className="toast-container">
                        <div className={`toast ${toast.type}`}>
                            <i className={`fas ${toast.type === 'success' ? 'fa-check-circle' : toast.type === 'error' ? 'fas-exclamation-circle' : 'fa-info-circle'}`}></i>
                            <span>{toast.msg}</span>
                        </div>
                    </div>
                )}

                {/* PAGE HEADER */}
                <div className="page-header animate-in">
                    <h1>DashBoard</h1>
                    <p>Welcome back , Michael. Here's your workforce overview for today</p>
                </div>

                <div className="stat-grid">
                    {[
                        { icon: 'fa-users', value: '247', label: 'Total Employees', change: '12% from last month', dir: 'up', col: 'var(--accent)', bg: 'var(--accent-soft)' },
                        { icon: 'fa-user-check', value: '218', label: 'Present Today', change: '3.2% from yesterday', dir: 'up', col: 'var(--success)', bg: 'rgba(52,211,153,0.12)' },
                        { icon: 'fa-paper-plane', value: '14', label: 'On Leave', change: '2 fewer than last week', dir: 'down', col: 'var(--warning)', bg: 'rgba(251,191,36,0.12)' },
                        { icon: 'fa-building', value: '6', label: 'Departments', change: '1 new this quarter', dir: 'up', col: 'var(--info)', bg: 'rgba(96,165,250,0.12)' }
                    ].map((stat, i) => (
                        <div className='stat-card animate-in' key={i} style={{ animationDelay: `${i * 0.05}s` }}>


                            <div className="stat-gow" style={{ background: stat.col }}></div>

                            <div className="stat-icon" style={{ background: stat.bg, color: stat.col }}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                            <div className='content'>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div className={`stat-change ${stat.dir}`}>
                                    <i className={`fas fa-arrow-${stat.dir}`}></i>

                                </div>
                                <span className='change'>{stat.change}</span>

                            </div>

                        </div>
                    ))
                    }
                </div>

                {/* CHARTS ROW */}
                <div className="content-grid triple animate-in" style={{ animationDelay: '0.25s' }} >

                    <div className="card">
                        <div className="card-header">
                            <h3>Attendance Overview</h3>
                            <span className="card-action" onClick={() => showToast('Report Generated', 'success')}>Export Report</span>
                        </div>
                        <div className="card-body">
                            <Line data={AttendanceChartData} options={ChartOptions} height={220} />
                        </div>

                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>DepartMent Split</h3>
                            <span className="card-action">View All</span>
                        </div>
                        <div className="card-body">
                            <Doughnut data={DeptChartData} options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                cutout: '65%',
                                plugins: {
                                    legend: {
                                        position: 'bottom',
                                        labels: {
                                            color: '#6B7084',
                                            font: {
                                                size: 11,
                                                family: 'DM Sans'
                                            },
                                            usePointStyle: true,
                                            pointStyle: 'circle',
                                            boxWidth: 6,
                                            padding: 12


                                        }
                                    }
                                }
                            }} />
                        </div>
                    </div>

                </div>

                {/* Table + Leaves Requets */}
                <div className="content-grid triple animate-in" >
                    <div className="card">
                        <div className="card-header">
                            <h3>Recent Employees</h3>
                            <span className='card-action'>View All</span>
                        </div>
                        <div className="card-body">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Departmet</th>
                                        <th>Status</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {employees.map(emp => (
                                        <tr key={emp.id}>
                                            <td>
                                                <div className="emp-cell">
                                                    <img src={`https://picsum.photos/seed/${emp.avatar}/68/68.jpg`} alt={emp.name} />
                                                    <div>
                                                        <div className="emp-name">{emp.name}</div>
                                                        <div className="emp-id">{emp.id}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{emp.dept}</td>
                                            <td><span className={`badge ${emp.status}`}>{emp.status}</span></td>
                                        </tr>
                                    ))}

                                </tbody>

                            </table>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Pending Leave Requests</h3>
                            <span className='card-action'>View All</span>
                        </div>
                        <div className="card-body">
                            {PendingLeaves.length === 0 ? (
                                <p className='card-disc'>All caught up! No pending requests.</p>

                            ) : (
                                PendingLeaves.map(l => (
                                    <div className='leave-item' key={l.id}>
                                        <img className='leave-avatar' src={`https://picsum.photos/seed/${l.avatar}/76/76.jpg`} alt={l.name} />

                                        <div className="leave-info">
                                            <div className="leave-name">{l.name}</div>
                                            <div className="leave-deatil">{l.type}&mdash;{l.reason}</div>
                                            <div className="leave-date">
                                                <i className="fas fa-calendar"></i>
                                                {l.from}   <span>to</span>    {l.to}
                                            </div>
                                        </div>
                                        <div className="leave-actions">
                                            <button className='btn-approve' onClick={() => HandleLeaveAction(l.id, 'approved')} title='Approve'>
                                                <i className="fas fa-check"></i>
                                            </button>
                                            <button className='btn-reject' onClick={() => HandleLeaveAction(l.id, 'rejected')} title='Reject'>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                {/* Activity and Departments */}
                <div className="content-grid animate-in">
                    <div className="card">
                        <div className="card-header">
                            <h3>Recent Activity</h3>
                            <span className="card-action">Clear All</span>
                        </div>
                        <div className="card-body">
                            {activities.map((a, i) => (
                                <div className='activity-item' key={i}>
                                    <div className="activity-dot">
                                        <i className={`fas ${a.icon}`}></i>
                                    </div>
                                    <div>
                                        <div className="activity-text"><strong>{a.name}</strong> {a.action}</div>
                                        <div className="activity-time">{a.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Departments</h3>
                            <span className="card-action">Manage</span>

                        </div>
                        <div className="card-body">
                            <div className="dept-grid">
                                {departments.map(d => (
                                    <div className='dept-card' key={d.name}>
                                        <div className="dept-icon" style={{ background: `${d.color}20`, color: d.color }}>
                                            <i className={`fas ${d.icon}`}></i>
                                        </div>
                                        <div className="dept-name">{d.name}</div>
                                        <div className="dept-count">{d.count}members</div>
                                        <div className="dept-bar">
                                            <div className="dept-bar-fill" style={{ width: `${d.budget}%`, background: d.color }}></div>
                                        </div>



                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </main >

        </>
    )

}

export default Dashboard