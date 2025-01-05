import React from 'react';
import StudentSideBar from '../../components/Ssidebar';
import './ReportSubmission.css';

export default function ReportSubmission() {
  return (
    <div className='report-container'> {/* Corrected class name */}
      <StudentSideBar />
      <div className='content'>
        <div className='top-box1'>
          <h2>&lt;&lt; REPORT SUBMISSION &gt;&gt;</h2>
        </div>

        <div className='grid-container'>
          <div className='instruction-box'>
            <h3>Instructions</h3>
            <ul>
              <li>Point 1: Description</li>
              <li>Point 2: Description</li>
              <li>Point 3: Description</li>
              <li>Point 4: Description</li>
              <li>Point 5: Description</li>
              <li>Point 6: Description</li>
              <li>Point 7: Description</li>
              <li>Point 8: Description</li>
              <li>Point 9: Description</li>
              <li>Point 10: Description</li>
            </ul>
          </div>
          <div className='form-box'>
            <h3>Submission Form</h3>
            <form>
              <label htmlFor="name">Name:</label> {/* Changed 'for' to 'htmlFor' */}
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email">Email:</label> {/* Changed 'for' to 'htmlFor' */}
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="details">Details:</label> {/* Changed 'for' to 'htmlFor' */}
              <textarea id="details" name="details" required></textarea>
              
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
