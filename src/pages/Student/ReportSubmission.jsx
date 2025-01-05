import React from 'react';
import StudentSideBar from '../../components/Ssidebar';
import './ReportSubmission.css';

export default function ReportSubmission() {
  return (
    <div className="report-submission-container">
      <StudentSideBar />
      <div className="header-box">
        <h1>&lt;&lt; REPORT SUBMISSION &gt;&gt;</h1>
      </div>
      <div className="content-container">
        {/* Add your content here */}
      </div>
    </div>
  );
}
