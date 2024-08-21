import React from 'react'
import './stracker.css'
import StudentSideBar from '../../components/Ssidebar'
export default function Stracker() {
    return (
        <>
          <StudentSideBar />
          <div className='content'>
      <div className='top-box'>
        <h2>&lt;&lt; STATUS TRACKER &gt;&gt;</h2>
      </div>
    
    </div>
          <div class="tracker-wrapper">
          <div class="tracker-container">
          <div class="tracker-line"></div>
          <div class="tracker-step">
            <div class="tracker-circle blue">1</div>
            <div class="tracker-label left">PS REGISTRATION</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle blue">2</div>
            <div class="tracker-label right">GUIDE APPROVAL</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle blue">3</div>
            <div class="tracker-label left">EXPERT TEAM APPROVAL</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle blue">4</div>
            <div class="tracker-label right">REVIEW-I</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle red">5</div>
            <div class="tracker-label left">REVIEW-II</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle red">6</div>
            <div class="tracker-label right">REVIEW-III</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle red">7</div>
            <div class="tracker-label left">REPORT SUBMISSION</div>
          </div>
          <div class="tracker-step">
            <div class="tracker-circle red">8</div>
            <div class="tracker-label right">PRODUCT COMPLETED</div>
          </div>
        </div>
        </div>
        </>
        
          );
}
