import React, { useState } from 'react';
import FSbar from '../../components/Fsidebar';
import './PSsubmission.css';

export default function PSsubmission() {
  const [formData, setFormData] = useState({
    pid: '',
    problemTitle: '',
    problemDescription: '',
    staffName: '',
    staffID: '',
    problemCategory: '',
    eligibleDepartments: '',
    maxStudentCount: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Data:', formData);
  };

  return (
    <div className="ps-submission-container">
      <FSbar />
      <div className="header-box2">
        <h1>&lt;&lt; PS SUBMISSION &gt;&gt;</h1>
      </div>
      <div className="content-container1">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="ps-form">
            <div className="form-group">
              <label htmlFor="pid">PID:</label>
              <input
                type="text"
                id="pid"
                name="pid"
                value={formData.pid}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="problemTitle">Problem Title:</label>
              <input
                type="text"
                id="problemTitle"
                name="problemTitle"
                value={formData.problemTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="problemDescription">Problem Description:</label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staffName">Staff Name:</label>
              <input
                type="text"
                id="staffName"
                name="staffName"
                value={formData.staffName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staffID">Staff ID:</label>
              <input
                type="text"
                id="staffID"
                name="staffID"
                value={formData.staffID}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="problemCategory">Problem Category:</label>
              <input
                type="text"
                id="problemCategory"
                name="problemCategory"
                value={formData.problemCategory}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eligibleDepartments">Eligible Departments:</label>
              <input
                type="text"
                id="eligibleDepartments"
                name="eligibleDepartments"
                value={formData.eligibleDepartments}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxStudentCount">Max Student Count:</label>
              <input
                type="text"
                id="maxStudentCount"
                name="maxStudentCount"
                value={formData.maxStudentCount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="instruction-container">
          <h2>Instructions</h2>
          <ol>
            <li>Ensure all fields are filled out correctly. Ensure all fields are filled out correctly.</li>
            <li>PID should be a unique identifier. Provide a clear and concise Problem Title.</li>
            <li>Provide a clear and concise Problem Title.</li>
            <li>Problem Description should be detailed.</li>
            <li>Staff Name should match the name of the responsible staff.</li>
            <li>Staff ID must be valid and verifiable. Problem Description should be detailed. Problem Description should be detailed.</li>
            <li>Select an appropriate Problem Category.</li>
            <li>State the Duration for the problem-solving. Problem Description should be detailed. Problem Description should be detailed. Problem Description should be detailed.</li>
            <li>Review all inputs before submitting.</li>
            <li>Mention all Eligible Departments for the problem.</li>
            <li>Specify the Max Student Count allowed.</li>
            <li>State the Duration for the problem-solving. Problem Description should be detailed. Problem Description should be detailed. Problem Description should be detailed.</li>
            <li>Review all inputs before submitting.</li>
            <li>Contact support if you encounter any issues. Problem Description should be detailed. Problem Description should be detailed. Problem Description should be detailed.</li>
            <li>State the Duration for the problem-solving. Problem Description should be detailed. Problem Description should be detailed. Problem Description should be detailed.</li>
            <li>Review all inputs before submitting.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
