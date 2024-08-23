import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './sbar.css';
import BIT from '../assets/logo192.png';
import { Link } from 'react-router-dom';

export default function Ssidebar() {
  const [activeLink, setActiveLink] = useState('/availps'); // Default active link

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav className='sidebar locked'>
        <div className='logo_items flex'>
          <span className='nav_image'>
            <img src={BIT} alt="" />
          </span>
          <span className='logo_name'>BIT PRODUCTS</span>
        </div>
        <div className='menu_container'>
          <div className='menu_items'>
            <ul className='menu_item'>
              <div className='menu_title flex'>
                <h3 className='title'>&lt;&lt; STUDENT 'S VIEW &gt;&gt;</h3>
                <span className='line'></span>
              </div>
              <li className='item'>
                <Link
                  to="/availps"
                  className={`link flex ${activeLink === '/availps' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/availps')}
                >
                  <i className="bx bx-folder-open" style={{ fontSize: '24px' }}></i>
                  <span>Available PS</span>
                </Link>
              </li>
              <li className='item'>
                <Link
                  to="/stracker"
                  className={`link flex ${activeLink === '/stracker' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/stracker')}
                >
                  <i className="bx bx-trip" style={{ fontSize: '24px' }}></i>
                  <span>Status Tracker</span>
                </Link>
              </li>
              <li className='item'>
                <a
                  href="#"
                  className={`link flex ${activeLink === '/report' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/report')}
                >
                  <i className="bx bx-file"></i>
                  <span>Report Submission</span>
                </a>
              </li>
              <li className='item'>
                <a
                  href="#"
                  className={`link flex ${activeLink === '/dashboard' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/dashboard')}
                >
                  <i className="bx bx-grid-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <ul className='btm'>
                <li className='item'>
                  <Link
                    to="/login"
                    className={`link flex ${activeLink === '/login' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('/login')}
                  >
                    <i className="bx bx-log-out"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <div className='Topbar'>
      </div>
    </>
  );
}
