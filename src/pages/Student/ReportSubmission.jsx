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
          {/* Add your content here for the second sub-container */}
        </div>
      </div>
    </div>
  );
}
