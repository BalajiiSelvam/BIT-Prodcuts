import React from 'react';
import StudentSideBar from '../../components/Ssidebar';
import 'boxicons/css/boxicons.min.css';
import './dash.css';

export default function AvailablePs() {
  return (
    <div className="dash-container"> 
      <StudentSideBar /> 
      <div className="header-box4"> 
        <h1>&lt;&lt; FACULTY DASHBOARD &gt;&gt;</h1> 
      </div> 
      <div className="content-container4">
        <div className="dashboard">
          <div className="left-card">
            <div className="card-content">
            {/* <img src='../../src/assets/profile.png' alt='Profile' className='staff-image' /> */}
              <h2>Staff Information</h2>
              <p><strong>Staff Name:</strong> Dr. Smith</p>
              <p><strong>Staff ID:</strong> 12345</p>
              <p><strong>Department:</strong> AI</p>
              <p><strong>POC Staff:</strong> Yes</p>
            </div>
          </div>
          <div className="right-cards">
            <div className="card">
              <div className="card-content">
                <h2>No of Students</h2>
                <p>58</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Ongoing Projects</h2>
                <p>50</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Completed Projects</h2>
                <p>30</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Rejected Projects</h2>
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="table-container"> <table className="ps-table"> <thead> <tr> <th>PID</th> <th>P-Title</th> <th>Student Count</th> <th>Status</th> </tr> </thead> <tbody> <tr> <td>1</td> <td>AI Chatbot</td> <td>5</td> <td>Ongoing</td> </tr> <tr> <td>2</td> <td>Smart Home System</td> <td>4</td> <td>Completed</td> </tr> <tr> <td>3</td> <td>Weather Prediction</td> <td>6</td> <td>Ongoing</td> </tr> <tr> <td>4</td> <td>Blockchain Voting</td> <td>3</td> <td>Rejected</td> </tr> <tr> <td>5</td> <td>Healthcare App</td> <td>7</td> <td>Ongoing</td> </tr> <tr><td>1</td> <td>AI Chatbot</td> <td>5</td> <td>Ongoing</td> </tr> <tr> </tr><tr><td>1</td> <td>AI Chatbot</td> <td>5</td> <td>Ongoing</td> </tr> <tr> <td>1</td> <td>AI Chatbot</td> <td>5</td> <td>Ongoing</td> </tr> <tr> </tr></tbody> <tfoot> <tr> <td colSpan="4"> <div className="pagination"> <button className="pagination-button">Previous</button> <button className="pagination-button">1</button> <button className="pagination-button">2</button> <button className="pagination-button">3</button> <button className="pagination-button">Next</button> </div> </td> </tr> </tfoot> </table> </div>
      </div>
    </div>
  )
}
