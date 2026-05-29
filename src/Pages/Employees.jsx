
import React, { useState } from "react"
import { employees, employees as initialEmployees } from "../data/dashboardData"
import './CSS/Employee.css'
import { useOutletContext } from "react-router-dom"
import '../App.css'

console.log(initialEmployees)



const Employees = () => {

  const [Employees, setEmployees] = useState(initialEmployees)
  const { searchQuery } = useOutletContext();
  const [isModelOpen, setIsModelOpen] = useState(false)

  const [formData, setFormData] = useState({

    name: '',
    dept: '',
    pos: '',
    email: '',
    status: 'active'
  })

  const filterEmployee = Employees.filter(emp => {
    const p = searchQuery.toLowerCase()

    return (
      emp.name.toLowerCase().includes(p) ||
      emp.dept.toLowerCase().includes(p) ||
      emp.pos.toLowerCase().includes(p) ||
      emp.email.toLowerCase().includes(p)
    )
  });
  const openModel = () => setIsModelOpen(true);
  const closeModel = () => {
    setIsModelOpen(false)
    setFormData({
      name: '',
      dept: '',
      pos: '',
      emai: '',
      status: 'active'
    })
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }
  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.pos || !formData.email) {
      alert('Please fill in all required fields')

      return
    }
    const newId = 'EMP' + String(Employees.length + 1).padStart(3, '0');
    const avatarSeed = formData.name.toLowerCase().replace(/\s/g, '') + Math.floor(Math.random() * 100)

    const newEmployee = {
      id: newId,
      name: formData.name,
      dept: formData.dept,
      pos: formData.pos,
      email: formData.status,
      avatar: avatarSeed

    };

    setEmployees([newEmployee, ...employees])
    closeModel()
  }



  return (
    <>
      <main className="page-content">

        <div className="page-header animate-in">
          <h1>Employees</h1>
          <p>Manage your workforce directory and employee records</p>
        </div>
        <div className="emp-actions animate-in">
          <div></div>
          <button className="btn-primary" onClick={openModel}>
            <i className="fas fa-plus"></i> Add Employee
          </button>
        </div>

        {/* Employee Table */}
        <div className="card-employee animate-in" style={{ animationDelay: '0.15s' }}>
          {/* <div className="card-header">
            <h3>All Employess ({filterEmployee.length})</h3>
          </div> */}
          <div className="card-body table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th >Employee</th>
                  <th>Position</th>
                  <th >Department</th>
                  <th >Email</th>
                  <th >Status</th>
                </tr>
              </thead>
              <tbody>
                {filterEmployee.length > 0 ? (

                  filterEmployee.map(emp => (
                    <tr key={emp.id}>
                      <td>
                        <div className="emp-cell">
                          <img src={`${emp.image}`} alt={`${emp.name}`} />
                          <div>
                            <div className="emp-name">{emp.name}</div>
                            <div className="emp-id">{emp.id}</div>

                          </div>
                        </div>
                      </td>
                      <td data-label="Position">{emp.pos}</td>
                      <td data-label="Department">{emp.dept}</td>
                      <td className="text-muted" data-label="Email">{emp.email}</td>
                      <td data-label="Status">
                        <span className={`badge ${emp.status}`}>
                          {emp.status.charAt(0).toUpperCase() + emp.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))

                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: 'var(--fg-muted)' }}>
                      No employees found matching your search.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>
          </div>


        </div>
        <div className={`model-overlay ${isModelOpen ? 'visible' : ''}`} onClick={closeModel}>
          <div className="model" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Employee</h2>
            <p>Fill in the details to add a new team member</p>

            <form onSubmit={handleAddEmployee}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" className="form-input" placeholder="e.g. Michael Otieno" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="selection">Department</label>
                <select name="dept" id="selection" className="form-input" value={formData} onChange={handleInputChange}>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div className="form-group">
                <label>Position</label>
                <input type="text" name="pos" className="form-input" placeholder="e.g. Senior Developer" value={formData.pos} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-input" placeholder="e.g. sarah@company.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" className="form-input" value={formData.status} onChange={handleInputChange}>
                  <option value="active">Active</option>
                  <option value="remote">Remote</option>
                  <option value="leave">On Leave</option>
                </select>
              </div>
              <div className="model-actions">
                <button type="button" className="btn-ghost" onClick={closeModel}>Cancel</button>
                <button type="submit" className="btn-primary">Add Employee</button>
              </div>
            </form>

          </div>
        </div>


      </main>
    </>
  )
}

export default Employees