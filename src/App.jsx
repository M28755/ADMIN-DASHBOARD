import toast, { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Employees from './Pages/Employees'
import Attendance from './Pages/Attendance'
import LeaveRequest from './Pages/LeaveRequest'
import Payslips from './Pages/Payslips'
import Report from './Pages/Report'
import Settings from './Pages/Settings'
import MyTasks from './Pages/MyTasks'
import MyProfile from './Pages/MyProfile'
import Documents from './Pages/Documents'
import Department from './Pages/Department'


function App() {


  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='employees' element={<Employees />} />
          <Route path='attendance' element={<Attendance />} />
          <Route path='leave' element={<LeaveRequest />} />
          <Route path='/payslip' element={<Payslips />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/department' element={<Department />} />
          <Route path='/reports' element={<Report />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/mytasks' element={<MyTasks />} />
        </Route>
      </Routes>


    </>
  )
}
export default App
