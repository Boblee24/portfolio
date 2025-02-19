import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import HeaderAnimation from "../components/HeaderAnimation";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const heading = "My Resume";
  

  return (
    <motion.div
      className="flex justify-center items-center pt-[3rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="resume"
    >
      <div className="flex flex-col w-full relative m-3">
        <div className=" z-10 flex items-center justify-center w-full mb-[1.5rem]">
          <HeaderAnimation heading={heading} />
        </div>
        
        <div className="flex flex-col items-center px-4 xii:px-9">
          <div className="w-full max-w-[800px] bg-white p-4 rounded-lg shadow-lg">
            <Document
              file="/ayomi-cv.pdf"
              className="mx-auto"
            >
              <Page 
                pageNumber={1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                scale={1}
                className="max-w-full"
                width={window.innerWidth > 768 ? 800 : window.innerWidth - 48}
              />
            </Document>
          </div>
          <a 
            href="/ayomi-cv.pdf" 
            download
            className="mt-4 px-4 py-3 hover:bg-[black] border-2 bg-[#d7d7d7] text-[black] duration-500 hover:scale-[1.05] border-[black] rounded-lg hover:text-white tracking-widest"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;