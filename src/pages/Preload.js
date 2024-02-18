import React from 'react';
import { useEffect, useState } from 'react'
import '../PreloadScreen.css';

const Preload = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete(); // Trigger the callback when loading is complete
    }, 3000); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`preload-container ${loading ? 'loading' : 'loaded'}`}>
      <div className="preload-overlay"></div>
      <div className="preload-content">
        <h1>Welcome to My Portfolio</h1>
        {/* Add other content or loading animations here */}
      </div>
      
    </div>
  );
};




export default Preload