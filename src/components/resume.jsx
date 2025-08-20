import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?url';
import 'pdfjs-dist/web/pdf_viewer.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [zoom, setZoom] = useState(1.5);
  const [rotation, setRotation] = useState(0);

  const pdfUrl = "/Anil-Kumar.pdf";

  // Load PDF
  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then(pdf => {
      setPdfDoc(pdf);
      setPageCount(pdf.numPages);
    });
  }, []);

  // Render page
  useEffect(() => {
    if (!pdfDoc) return;

    const renderPage = async () => {
      const page = await pdfDoc.getPage(pageNum);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const devicePixelRatio = window.devicePixelRatio || 1;
      const scale = zoom * devicePixelRatio;
      const viewport = page.getViewport({ scale, rotation });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      canvas.style.width = `${viewport.width / devicePixelRatio}px`;
      canvas.style.height = `${viewport.height / devicePixelRatio}px`;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    };

    renderPage();
  }, [pdfDoc, pageNum, zoom, rotation]);

  const goToPrevPage = () => setPageNum((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNum((prev) => Math.min(prev + 1, pageCount));
  const rotateLeft = () => setRotation((r) => (r - 90 + 360) % 360);
  const rotateRight = () => setRotation((r) => (r + 90) % 360);
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    link.click();
  };
  const openExternal = () => window.open(pdfUrl, '_blank');
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  // Drag to scroll functionality
  useEffect(() => {
    const container = containerRef.current;
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    const handleMouseDown = (e) => {
      if (zoom <= 1.5) return;
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      startY = e.pageY - container.offsetTop;
      scrollLeft = container.scrollLeft;
      scrollTop = container.scrollTop;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const y = e.pageY - container.offsetTop;
      container.scrollLeft = scrollLeft - (x - startX);
      container.scrollTop = scrollTop - (y - startY);
    };

    const handleMouseUp = () => (isDragging = false);

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [zoom]);

  return (
    <section className="section">
      <h2 className="section-title">Resume</h2>
      <div className="pdf-toolbar">
        <div className="toolbar-group">
          <button onClick={goToPrevPage}><i className="fas fa-chevron-left"></i></button>
          <span className="page-info">{pageNum} / {pageCount}</span>
          <button onClick={goToNextPage}><i className="fas fa-chevron-right"></i></button>
        </div>
        <div className="toolbar-sep"></div>
        <div className="toolbar-group">
          <button onClick={handleZoomOut}><i className="fas fa-minus"></i></button>
          <button onClick={handleZoomIn}><i className="fas fa-plus"></i></button>
        </div>
        <div className="toolbar-sep"></div>
        <div className="toolbar-group">
          <button onClick={rotateLeft}><i className="fas fa-undo"></i></button>
          <button onClick={rotateRight}><i className="fas fa-redo"></i></button>
        </div>
        <div className="toolbar-sep"></div>
        <div className="toolbar-group">
          <button onClick={downloadPdf}><i className="fas fa-print"></i></button>
        </div>
        <div className="toolbar-sep"></div>
        <div className="toolbar-right">
          <button onClick={downloadPdf}><i className="fas fa-download"></i></button>
          <button onClick={openExternal}><i className="fas fa-external-link-alt"></i></button>
        </div>
      </div>
      <div className="Resume-container" ref={containerRef}>
        <canvas id='pdf-canvas' ref={canvasRef}></canvas>
      </div>
    </section>
  );
};

export default Resume;
