import React, { useEffect, useState } from 'react';
import './Wave.css';

function Wave() {
  const [waveLoaded, setWaveLoaded] = useState(false);
  const [headlineLoaded, setHeadlineLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay of 2 seconds for wave animation
    setTimeout(() => {
      setWaveLoaded(true);
    }, 500);

    // Simulate a delay of 3 seconds for headline animation
    setTimeout(() => {
      setHeadlineLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`wave-container ${waveLoaded ? 'wave-loaded' : ''}`}>
      <div className={`wave ${waveLoaded ? 'animate-wave' : ''}`}></div>
      {headlineLoaded && (
        <div className={`headline animate-headline`}>
          Hello, this is Vishal Meesala. Welcome to my digital domain, where ideas unfold and creativity knows no limits. Join me on this virtual journey of exploration and inspiration!
        </div>
      )}
    </div>
  );
}

export default Wave;
