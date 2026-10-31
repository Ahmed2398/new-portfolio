import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { useLang } from "../../i18n/LanguageContext";
import pdf from "../../Assets/Ahmed_Ashraf_Ramadan.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { t } = useLang();
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fit the page to the viewport, minus the side gutters, capped for large screens
  const pageWidth = Math.min(width - 32, 900);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <h1 className="visually-hidden">{t("Resume — Ahmed Ashraf", "السيرة الذاتية — أحمد أشرف")}</h1>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            download="Ahmed_Ashraf_Ramadan_CV.pdf"
            className="resume-download-btn"
          >
            <AiOutlineDownload />
            &nbsp;{t("Download CV", "تحميل الـ CV")}
          </Button>
        </Row>

        <Row className="resume">
          <Document 
            file={pdf} 
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pageWidth}
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
