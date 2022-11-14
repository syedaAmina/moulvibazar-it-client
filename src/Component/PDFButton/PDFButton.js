import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from "react-bootstrap";
const PDFButton = ({ rootElementID, DownloadFileName }) => {
  const DownloadFileDocument = () => {
    const input = document.getElementById(rootElementID);
    html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${DownloadFileName}`);
    });
  };
  return (
    <div>
      <Button onClick={DownloadFileDocument} className="btn-secondary p-3 fs-5 mt-5">
        DownLoad This Page
      </Button>
    </div>
  );
};

export default PDFButton;
