import React from 'react';
import StudentSideBar from '../../components/Ssidebar';
import 'boxicons/css/boxicons.min.css';
import './approval.css';

export default function Approval() {
  return (
    <div className="approval-container"> 
      <StudentSideBar /> 
      <div className="header-box5"> 
        <h1>&lt;&lt; REQUEST APPROVAL &gt;&gt;</h1> 
      </div> 
      <div className="content-container5">
        <div className="table-container">
          <table className="ps-table">
            <thead>
              <tr>
                <th>PID</th>
                <th>Roll No</th>
                <th>Departments</th>
                <th>Count</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>7376222ITXXX<br/>7376222ALXXX<br/>7376221CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>7376223ITXXX<br/>7376223ALXXX<br/>7376223CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>7376224ITXXX<br/>7376224ALXXX<br/>7376224CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>7376225ITXXX<br/>7376225ALXXX<br/>7376225CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>7376226ITXXX<br/>7376226ALXXX<br/>7376226CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
              <tr>
                <td>6</td>
                <td>7376226ITXXX<br/>7376226ALXXX<br/>7376226CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
              <tr>
                <td>7</td>
                <td>7376226ITXXX<br/>7376226ALXXX<br/>7376226CSXXX</td>
                <td>Information Technology<br/>Artificial Intelligence and Machine Learning<br/>Computer Science and Enginerring</td>
                <td>3</td>
                <td><button className="approve-button">Approve</button></td>
              </tr>
            
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">
                  <div className="pagination">
                    <button className="pagination-button">Previous</button>
                    <button className="pagination-button">1</button>
                    <button className="pagination-button">2</button>
                    <button className="pagination-button">3</button>
                    <button className="pagination-button">Next</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
