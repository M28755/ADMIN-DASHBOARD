import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins} from 'chart.js/auto'
import {Bar, Pie} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


ChartJS.defaults.font.size = 16;
const Dashboard = () =>{

 const data = {
        labels:['Engineering', 'Sales', 'Operations', 'Finance', 'HR', 'Marketing', 'Legal'],
        datasets:[
            {
                label: 'Headcount by Department',
                data:[312, 198, 245, 143, 87, 176, 123],
                backgroundColor:[
                    'rgba(255, 99, 132)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 205, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(54, 162, 235)',
                        'rgba(153, 102, 255)',
                        'rgba(201, 203, 207)'
                ],
                 borderColor:[
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderRadius: 3,
                borderSkipped: false,
                
            }]
    } 
    const option = {
        responsive:true,
        plugins:{
            legend:{
                display:false
            }
        },
        scales:{
            x:{
                grid:{
                    display:false
                },
                ticks:{
                    font:{
                        size:14
                    },
                    color:'#000000ff'
                }
            },
            y:{
                grid:{
                    color:'rgba(0,0,0)'
                },
                ticks:{
                    font:{
                        size:14
                    },
                    color:'#000000ff'
                }
            }
        }
    }

    const pieData = {
        labels: ['Full-time 74%', 'Contract 15%', 'Part-time 11%'],
        datasets:[
            {
                data:[170, 35, 25],
                backgroundColor:[
                    'rgba(255, 99, 132)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)'
                ],
                borderColor:[
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)'
                ],
                borderRadius: 3,
                borderSkipped: false,
            }
        ]
    }



    return(
        <>
        <div className="dashboard">
           <div className="Top-bar">
                    <div className="Top-bar-left">
                        <span className="Top-bar-Tittle">Dashboard</span>
                        <span className="Today-date">{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="Top-bar-right">
                            <span className="badge badge-warning">5 pending approvals</span>
                            <span className="badge badge-success"> 20% increase in sales</span>
                    </div>
           </div>
            <div className="Matrics-grid">
                <div className="Matric-card bg-light-subtle">
                    <div className="Matric-card-title">Total Employees</div>
                    <div className="Matric-card-value">230</div>
                    <div className="Matric-card-change text-success">+12 this month</div>
                    
                </div>
                <div className="Matric-card bg-light-subtle">
                    <div className="Matric-card-title">Present Today</div>
                    <div className="Matric-card-value">180</div>
                    <div className="Matric-card-change text-secondary-emphasis">87% attendance</div>
                    
                </div>
                <div className="Matric-card bg-light-subtle">
                    <div className="Matric-card-title">Open Position</div>
                    <div className="Matric-card-value">12</div>
                    <div className="Matric-card-change text-success">3 new opening</div>
                    
                </div>
                <div className="Matric-card bg-light-subtle">
                    <div className="Matric-card-title">Attrition Rate</div>
                    <div className="Matric-card-value">5%</div>
                    <div className="Matric-card-change text-danger">+3% vs last year</div>

                </div>
            </div>
            <div className="Chart-grid">

                <div className="Chart-card">
                    <div className="Chart-card-title">Headcount by Department</div>
                    <div className="Chart-wrap"  >
                       
                        {/* <canvas  id="deptChart" style={{ height: '300px' }}>
                            
                        </canvas> */}
                        <Bar data={data} className="BarGraph-Chart" options={option}/>
                    </div>
                
                </div>
                <div className="Chart-card">
                        <div className="Chart-card-title">Attendance Overview</div>
                        <div></div>
                        <div className="Chart-card-title">Employment Type</div>
                        <div className="Chart-wrap">
                            <Pie data={pieData}/>
                        </div>

                </div>
            </div>
            <section className="section-two">
                
                  {/* Upcoming Events */}
                  <div className="Event-card bg-light-subtle">
                    <h2>Upcoming Events</h2>
                    <div className="Event-list">
                        <div className="Event-date">
                            <span className="Event-day">23</span>
                                <span className="Event-month">APRIL</span>
                        </div>
                        <div className="Event-info">
                            <span className="Event-name"></span>
                            <span className="Event-Role">5-year work anniversary</span>
                        </div>

                    </div>
                    <div className="Event-list">
                        <div className="Event-date">
                            <span className="Event-day">01</span>
                                <span className="Event-month">MAY</span>
                        </div>
                        <div className="Event-info">
                            <span className="Event-name">OMODI MICHAEL OTIENO</span>
                            <span className="Event-Role"> Probation review</span>
                        </div>

                    </div>
                    <div className="Event-list">
                        <div className="Event-date">
                            <span className="Event-day">05</span>
                                <span className="Event-month">MAY</span>
                        </div>
                        <div className="Event-info">
                            <span className="Event-name">3 contracts expering</span>
                            <span className="Event-Role">Renewal action required </span>
                        </div>

                    </div>
                    <div className="Event-list">
                        <div className="Event-date">
                            <span className="Event-day">10</span>
                                <span className="Event-month">MAY</span>
                        </div>
                        <div className="Event-info">
                            <span className="Event-name">Q2 performance review</span>
                            <span className="Event-Role">12 reviews due</span>
                        </div>

                    </div>


                  </div>
                  {/*Recruitement pipeline */}
                  <div className="Recruitment-card">
                    <div className="Recruitment-title">Recruitment Pipeline</div>
                    <div>
                        <div className="Recruitment-item">
                            <div className="Recruitment-name">Senior Engineer</div>
                            <span className="Recruitment-count"> 15 applied</span>
                            <span className="Recruitment-stage"> Screening</span>

                        </div>
                         <div className="Recruitment-item">
                            <div className="Recruitment-name">Data Analyst</div>
                            <span className="Recruitment-count"> 7 applied</span>
                            <span className="Recruitment-stage"> Interview</span>

                        </div>
                         <div className="Recruitment-item">
                            <div className="Recruitment-name">Project Manager</div>
                            <span className="Recruitment-count"> 1 applied</span>
                            <span className="Recruitment-stage"> Offer Extended</span>

                        </div>
                         <div className="Recruitment-item">
                            <div className="Recruitment-name">Tech Lead</div>
                            <span className="Recruitment-count"> 4 applied</span>
                            <span className="Recruitment-stage"> Offer ended</span>

                        </div>
                         <div className="Recruitment-item">
                            <div className="Recruitment-name">HR Generalist</div>
                            <span className="Recruitment-count"> 3 applied</span>
                            <span className="Recruitment-stage"> Final Interview</span>

                        </div>
                        
                      

                    </div>
                    


                  </div>
          
                
            </section>






            
        </div>
        
        
        </>
    )
}
export default Dashboard;