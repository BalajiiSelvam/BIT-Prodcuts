import React from 'react'
import StudentSideBar from '../../components/Ssidebar'
import './dashboard.css'
import Graph from '../../components/Graph'



export default function Dashboard() {
  return (
    <div className='dashboardcontainer'>
          <StudentSideBar />
          <div className='content'>
              <div className='top-box'>
                <h2>&lt;&lt; DASHBOARD &gt;&gt;</h2>
              </div>

              <div className='user-info-box'>
              <img src='../../src/assets/profile.png' alt='Profile' className='profile-image' />
                    <div className='user-details'>
                        <h3>BALAJI S</h3>
                        <p>73762XXXXXXX</p>
                        <p>Semester - <span className='sem'>III</span></p>
                        <p>B.Tech - AIML</p>
                        <p>Mentor - Venkatesan R</p>
                        <p>Special Lab - SLB031 | Inactive</p>
                        <p>
                        Current Status -  <span className='status-active'>ACTIVE</span>
                        </p>
                    </div>
              </div>
              <div className='grid-container'>
                    <div className='grid-item'>
                        <div className='item-title'>Product Registered (I to IV)</div>
                        <div className='item-number'>1</div>
                    </div>
                    <div className='grid-item'>
                        <div className='item-title'>Ongoing (I to IV)</div>
                        <div className='item-number'>2</div>
                    </div>
                    <div className='grid-item'>
                        <div className='item-title'>Completed (I to IV)</div>
                        <div className='item-number'>3</div>
                    </div>
                    <div className='grid-item'>
                        <div className='item-title'>Rejected (I to IV)</div>
                        <div className='item-number'>4</div>
                    </div>
              </div>
              <div className='table-container'>
                  <div className='table-item'>
                    <table>
                        <thead>
                          <tr>
                            <th>PID</th>
                            <th>COMPLETED PRODUCTS</th>
                            <th>DOMAIN</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>1</td><td>E-Commerce Site</td><td> <span className='status-active'>Software</span></td></tr>
                          <tr><td>2</td><td>Image classification Site</td><td> <span className='status-active'>Software</span></td></tr>
                          <tr><td>3</td><td>Quantum Robot</td><td> <span className='status-active'>Hardware</span></td></tr>
                          <tr><td>4</td><td>LinkedIn Clone</td><td> <span className='status-active'>Software</span></td></tr>
                        </tbody>
                    </table>
                    <div className='table-controls'>
                      <button>Previous</button>
                      <button>Next</button>
                    </div>
                  </div>
      
                  <div className='table-item'>
                    <table>
                        <thead>
                          <tr>
                            <th>PID</th>
                            <th>REJECTED PRODUCTS</th>
                            <th>DOMAIN</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>1</td><td>Event Management</td><td> <span className='status-activeno'>Software</span></td></tr>
                          <tr><td>2</td><td>Hospital Management</td><td> <span className='status-activeno'>Software</span></td></tr>
                          <tr><td>3</td><td>Hostel Management</td><td> <span className='status-activeno'>Software</span></td></tr>
                          <tr><td>4</td><td>Hotel MAnagement</td><td> <span className='status-activeno'>Software</span></td></tr>
                        </tbody>
                    </table>
                    <div className='table-controls'>
                      <button>Previous</button>
                      <button>Next</button>
                    </div>
              </div>


    </div>

</div>
   
      
    </div>
  )
}
