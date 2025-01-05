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
      <div className="content-container">
        <table className="ps-table">
          <thead>
            <tr>
              <th>P-ID</th>
              <th>P-TITLE</th>
              <th>P-DESCRIPTION</th>
              <th>STAFF</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>AI Chatbot</td>
              <td>Develop a conversational AI chatbot using NLP.</td>
              <td>Dr. Smith</td>
              <td>AI</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Smart Home System</td>
              <td>Create an integrated smart home automation system.</td>
              <td>Prof. Johnson</td>
              <td>IOT</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Weather Prediction</td>
              <td>Design a weather prediction model using machine learning.</td>
              <td>Dr. Lee</td>
              <td>Data Science</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Blockchain Voting</td>
              <td>Implement a secure voting system using blockchain.</td>
              <td>Prof. Kumar</td>
              <td>Blockchain</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Healthcare App</td>
              <td>Develop a mobile app to track and monitor patient health.</td>
              <td>Dr. Patel</td>
              <td>Healthcare</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Stock Market Analysis</td>
              <td>Analyze and predict stock market trends.</td>
              <td>Prof. Brown</td>
              <td>Finance</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Online Learning Platform</td>
              <td>Build a web-based online learning platform.</td>
              <td>Dr. Wilson</td>
              <td>Education</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Autonomous Vehicle</td>
              <td>Develop an autonomous vehicle navigation system.</td>
              <td>Prof. Davis</td>
              <td>Automotive</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Virtual Reality Game</td>
              <td>Create an immersive virtual reality game experience.</td>
              <td>Dr. Thomas</td>
              <td>Entertainment</td>
              <td><button className="View-button">View</button></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Cybersecurity Tool</td>
              <td>Develop a tool to detect and prevent cyber threats.</td>
              <td>Prof. Garcia</td>
              <td>Security</td>
              <td><button className="View-button">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
