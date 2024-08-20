import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import AvailPs from './pages/Student/AvailablePs'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/availps" element={<AvailPs />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
