import React, { useState } from 'react';
import StudentSideBar from '../../components/Ssidebar';
import './ReportSubmission.css';

export default function ReportSubmission() {
  const [teamSize, setTeamSize] = useState(1);
  const handleTeamSizeChange = (e) => {
    setTeamSize(parseInt(e.target.value, 10));
  };

  const renderTeamMembers = () => {
    const members = [];
    for (let i = 1; i < teamSize; i++) {
      members.push(
        <div key={i} className="team-member">
          <label>
            Name:
            <input type="text" name={`name_${i}`} required />
          </label>
          <label>
            Roll No:
            <input type="text" name={`rollno_${i}`} required />
          </label>
          <label>
            Department:
            <input type="text" name={`department_${i}`} required />
          </label>
          <label>
            Semester:
            <input type="text" name={`semester_${i}`} required />
          </label>
        </div>
      );
    }
    return members;
  };

  return (
    <div className="report-submission-container">
      <StudentSideBar />
      <div className="header-box">
        <h1>&lt;&lt; REPORT SUBMISSION &gt;&gt;</h1>
      </div>
      <div className="content-container1">
        <div className="sub-container1">
          <h2>Instructions</h2>
          <ol>
            <li>Choose a Topic: Select a topic that interests you and is relevant to your course.</li>
            <li>Conduct Research: Gather information from reliable sources such as academic journals, books, and reputable websites.</li>
            <li>Outline Your Report:
              <ol>
                <li>Title Page: Include the project title, your name, and the submission date.</li>
                <li>Table of Contents: List all the sections and sub-sections with page numbers.</li>
              </ol>
            </li>
            <li>Introduction: Provide a brief overview of your project and its objectives.</li>
            <li>Methodology: Describe the methods and procedures you used in your research.</li>
            <li>Results and Discussion:
              <ol>
                <li>Results: Present your findings with supporting data and graphs.</li>
                <li>Discussion: Interpret your results and discuss their implications.</li>
              </ol>
            </li>
            <li>Conclusion: Summarize your key findings and their significance.</li>
            <li>References: Cite all the sources you used in your research following a specific citation style.</li>
            <li>Proofreading: Review your report for any grammatical or formatting errors.</li>
            <li>Submission: Submit your report by the deadline in the specified format (e.g., PDF).</li>
          </ol>
        </div>
        <div className="sub-container2">
          <form className="report-form">
            <label>
              Name:
              <input type="text" name="name_0" required />
            </label>
            <label>
              Roll No:
              <input type="text" name="rollno_0" required />
            </label>
            <label>
              Department:
              <input type="text" name="department_0" required />
            </label>
            <label>
              Semester:
              <input type="text" name="semester_0" required />
            </label>
            <label> 
              Team Members: 
              <span style={{ marginRight: '10px' }}></span>
              <input 
                type="number" 
                name="teamSize" 
                min=" 01" 
                value={teamSize} 
                onChange={handleTeamSizeChange} 
                style={{ marginRight: '10px' }} 
              /> 
            </label>

            {renderTeamMembers()}
            <label>
              Guide Name:
              <input type="text" name="guideName" required />
            </label>
            <label>
              Review Completion:
              <input type="file" name="reviewCompletion" accept="image/*" />
            </label>
            <label>
              Report:
              <input type="file" name="report" accept="application/pdf" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
