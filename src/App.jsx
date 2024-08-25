import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import AvailPs from './pages/Student/AvailablePs'
import Stracker from './pages/Student/Stracker'
import ReportSubmission from './pages/Student/ReportSubmission'
import Dashboard from './pages/Student/Dashboard'
import './App.css'

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
    </Routes>
  </BrowserRouter>
  )
}

export default App
