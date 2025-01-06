import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './sbar.css';
import BIT from '../assets/logo192.png';
import { Link } from 'react-router-dom';

export default function Fsidebar() {
  const [activeLink, setActiveLink] = useState('/pssub'); // Default active link

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav className='sidebar-locked'>
        <div className='logo_items flex'>
          <span className='nav_image'>
            <img src={BIT} alt="BIT Logo" />
          </span>
          <span className='logo_name'>BIT PRODUCTS</span>
        </div>
        <div className='menu_container'>
          <div className='menu_items'>
            <ul className='menu_item'>
              <div className='menu_title flex'>
                <h3 className='title'>&lt;&lt; FACULTY 'S VIEW &gt;&gt;</h3>
                <span className='line'></span>
              </div>
              <li className='item'>
                <Link
                  to="/pssub"
                  className={`link flex ${activeLink === '/pssub' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/pssub')}
                >
                  <i className="bx bx-folder-open" style={{ fontSize: '24px' }}></i>
                  <span>PS Submission</span>
                </Link>
              </li>
              <li className='item'>
                <Link
                  to="/approval"
                  className={`link flex ${activeLink === '/approval' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/approval')}
                >
                  <i className="bx bx-trip" style={{ fontSize: '24px' }}></i>
                  <span>Request Approval</span>
                </Link>
              </li>
              <li className='item'>
                <Link
                  to="/slotbook"
                  className={`link flex ${activeLink === '/slotbook' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/slotbook')}
                >
                  <i className="bx bx-file"></i>
                  <span>Slot Booking</span>
                </Link>
              </li>
              <li className='item'>
                <Link
                  to="/dash"
                  className={`link flex ${activeLink === '/dash' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/dash')}
                >
                  <i className="bx bx-grid-alt"></i>
                  <span>Dashboard</span>
                </Link>
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
