import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return loaded ? null : <div className="preloader">Loading...</div>;
};

export default Preloader;