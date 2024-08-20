import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import './sbar.css'
import BIT from '../assets/logo192.png'

export default function Ssidebar() {
  return (
    <>
    <nav className='sidebar locked'>
      <div className='logo_items flex'>
          <span className='nav_image'>
            <img src={BIT} alt=""/>
          </span>
          <span className='logo_name'>BIT PRODUCTS</span>
      </div> 
      <div class="menu_container">
        <div class="menu_items">
          <ul class="menu_item">
            <div class="menu_title flex">
              <h3 class="title">&lt;&lt; STUDENT 'S VIEW &gt;&gt;</h3>
              <span class="line"></span>
            </div>
            <li class="item">
              <a href="#" class="link flex">
              <i className="bx bx-folder-open" style={{ fontSize: '24px' }}></i>
              <span>Availale PS</span>
              </a>
            </li>
            <li class="item">
              <a href="#" class="link flex">
              <i class="bx bx-trip"style={{ fontSize: '24px' }}></i>
              <span> Status Tracker</span>
              </a>
            </li>
            <li class="item">
              <a href="#" class="link flex">
              <i class="bx bx-file"></i>
              <span>Report Submission</span>
              </a>
            </li>
            <li class="item">
              <a href="#" class="link flex">
              <i class="bx bx-grid-alt"></i>
              <span>Dashboard</span>
              </a>
            </li>
            <ul className='btm'>
              <li class="item">
              <a href="#" class="link flex">
              <i class="bx bx-log-out"></i>
              <span>Logout</span>
              </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
        <div className='Topbar'>
        </div>
        </>
  )
}
