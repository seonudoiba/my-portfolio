// PDFButton.js
import React from 'react';
import "./About/About.css";

const PDFButton = () => {
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf'; // Path to your PDF file
        link.download = 'Resume.pdf'; // Name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button onClick={downloadPDF} className="about btn pointer" >Download Cv</button>
        </div>
    );
};

export default PDFButton;
