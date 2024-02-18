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
        <div class="escape">Escape</div>
        <div class="experience">
          <span>into amazing experiences</span>
        </div>
      </div>
    </div>
  );
};

export default Preload;
