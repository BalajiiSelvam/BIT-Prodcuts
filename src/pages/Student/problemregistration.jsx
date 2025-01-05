import React from 'react'
import StudentSideBar from '../../components/Ssidebar'
import './problems.css'

export default function ProjectDetail() {
  return (
    <div className="project-detail-container">
      <StudentSideBar />
      <div className="document-container">
        <div className="document-header">
          <h1>Project Details</h1>
        </div>
        <div className="document-content">
          <p><strong>PID:</strong> 12345</p>
          <p><strong>Title:</strong> AI Chatbot Development</p>
          <p><strong>Description:</strong> Develop a conversational AI chatbot using NLP. This chatbot should be able to handle general inquiries and provide automated responses. The project will involve training models on diverse datasets.</p>
          <p><strong>Staff:</strong> Dr. Smith</p>
          <p><strong>Staff ID:</strong> SM123</p>
          <p><strong>Requirements:</strong> The project will require a thorough understanding of natural language processing, machine learning, and data preprocessing techniques. The team must also have knowledge of neural networks and chatbot frameworks. The final deliverable should include a working prototype and comprehensive documentation.</p>
          <p><strong>Domain:</strong> Software</p>
          <p><strong>Max Team Count:</strong> 4</p>
          <p><strong>Eligible Departments:</strong> Computer Science, Information Technology, Electronics</p>
          <p><strong>Max Duration:</strong> 6 Months</p>
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  )
}
