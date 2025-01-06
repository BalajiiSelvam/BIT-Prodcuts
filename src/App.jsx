import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AvailPs from './pages/Student/AvailablePs';
import Stracker from './pages/Student/Stracker';
import ReportSubmission from './pages/Student/ReportSubmission';
import Dashboard from './pages/Student/Dashboard';
// import Problems from './pages/Student/problemregistration';
import PSsubmission from './pages/Faculty/PSsubmission';
import Slotbooking from './pages/Faculty/Slotbooking';
import Approval from './pages/Faculty/approval'
import Dash from './pages/Faculty/dash';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/availps" element={<AvailPs />} />
        <Route path="/stracker" element={<Stracker />} />
        <Route path="/reportsub" element={<ReportSubmission />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pssub" element={<PSsubmission />} />
           <Route path="/slotbook" element={<Slotbooking />} />
           <Route path="/approval" element={<Approval />} />
        <Route path="/dash" element={<Dash />} />
     {/*   <Route path="/problemregistration" element={<Problems />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
