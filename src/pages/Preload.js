import React from "react";
import { useEffect, useState } from "react";
import "../PreloadScreen.css";

const Preload = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete(); // Trigger the callback when loading is complete
    }, 4000); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`preload-container ${loading ? "loading" : "loaded"}`}>
      <div className="preload-overlay"></div>
      <div className="preload-content">
        <div className="escape text-[1.35rem]">Not your</div>
        <div className="experience text-[1.35rem]">
          <span>Regular Frontend Dev</span>
        </div>
      </div>
    </div>
  );
};

export default Preload;
