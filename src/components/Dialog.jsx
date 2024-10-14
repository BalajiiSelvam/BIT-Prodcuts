// Dialog.jsx
import React from 'react';
import './Dialog.css'; // Create a CSS file for styling

const Dialog = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <button className="close-button" onClick={onClose}>X</button>
                <h3>Product Details</h3>
                <p><strong>PID:</strong> {data.pid}</p>
                <p><strong>Title:</strong> {data.title}</p>
                <p><strong>Domain:</strong> {data.domain}</p>
                <p><strong>Guide:</strong> {data.guide}</p>
                <p><strong>Started Date:</strong> {data.startDate}</p>
            </div>
        </div>
    );
};

export default Dialog;
