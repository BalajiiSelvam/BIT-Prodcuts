import React from 'react'
import StudentSideBar from '../../components/Ssidebar'
import 'boxicons/css/boxicons.min.css';
import './ReportSubmission.css'; // For header-box
import './availableps.css'

export default function AvailablePs() {
  return (
    <div className="available-ps-container"> 
    <StudentSideBar /> 
      <div className="header-box"> 
        <h1>&lt;&lt; AVAILABLE PROBLEM STATEMENTS &gt;&gt;</h1> 
      </div> 
    </div>
   
  )
}
