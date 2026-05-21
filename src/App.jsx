import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import './App.css'
import Dashboard from './Components/Dashboard';


function PlaceholderPage({ title }) {
  return (
    <main className="page-content">
      <div className="page-header animate-in">
        <h1>{title}</h1>
        <p>This module is under development.</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        {/* All pages share the Layout (Sidebar + Topbar) */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          {/* Placeholder routes so navigation works without 404 */}
          <Route path="employees" element={<PlaceholderPage title="Employees" />} />
          <Route path="attendance" element={<PlaceholderPage title="Attendance" />} />
          <Route path="leaves" element={<PlaceholderPage title="Leave Requests" />} />
          <Route path="departments" element={<PlaceholderPage title="Departments" />} />
          <Route path="payroll" element={<PlaceholderPage title="Payroll" />} />
          <Route path="reports" element={<PlaceholderPage title="Reports" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </>
  );
}