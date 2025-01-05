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
        <div className="sub-container1">
          {/* Add your content here for the first sub-container */}
        </div>
        <div className="sub-container2">
          {/* Add your content here for the second sub-container */}
        </div>
      </div>
    </div>
  );
}
