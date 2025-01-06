import React, { useState } from 'react';
import FSbar from '../../components/Fsidebar';
import './Slotbooking.css';

export default function Slotbooking() {
  return (
    <div className="slotbooking-container">
      <FSbar />
      <div className="header-box3">
        <h1>&lt;&lt; SLOT BOOKING &gt;&gt;</h1>
      </div>
      <div className="content-container2">
        <table className="slot-booking-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Timing</th>
              <th>PID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index}>
                <td>Date {index + 1}</td>
                <td>Time {index + 1}</td>
                <td><input type="text" placeholder="Enter PID" style={{ caretColor: '#2fb9e7',  outline: '#2fb9e7;' }} /></td>
                <td><button className="book-slot-btn">Book Slot</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
