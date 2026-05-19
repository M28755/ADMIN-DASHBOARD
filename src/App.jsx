import React from 'react'

import './App.css'
import SideBar from './Components/SideBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout  from './Components/Layout'



function PlaceholderPage({title}){
  return(
    < >
    <main className="page-content">
      <div className="page-header">
        <h1>{title}</h1>
        <p>This Module is under development</p>
        <p>Please check back later</p>
      </div>
    </main>

    </>
  )
}
function App() {


  return (
    
    
        <Routes>
          {/* All pages to share the layout */}
          <Route path='/' element={<Layout/>}>
         {/*  <Route index element={<Dashboard/>}/>

           <Route path="employees" element={<PlaceholderPage title="Employees" />} />
          <Route path="attendance" element={<PlaceholderPage title="Attendance" />} />
          <Route path="leaves" element={<PlaceholderPage title="Leave Requests" />} />
          <Route path="departments" element={<PlaceholderPage title="Departments" />} />
          <Route path="payroll" element={<PlaceholderPage title="Payroll" />} />
          <Route path="reports" element={<PlaceholderPage title="Reports" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} /> */}
           </Route>
        </Routes>

      
      



    
  )
}
export default App
