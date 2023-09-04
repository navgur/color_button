   "use client"

import React, { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import CountBox from './CountBox';
import ColorButton from './ColorButton.js';
import './Global.css';

const initialCountColor = {
  Red: 0,
  Yellow: 0,
  Blue: 0,
  Green: 0
};

const Page = () => { 
  const [colorCounts, setColorCounts] = useState(initialCountColor);
  const [selectedColor, setSelectedColor] = useState('black');

  const handleColorClick = (color) => {
    setColorCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1
    }));
    setSelectedColor(color); 
  };

  return (
    <div>
      <div className="colorchange">
        <ColorDisplay currentcolor={selectedColor} />
        <CountBox colorcount={colorCounts} />
      </div>
      <div className="button-container">
        <ColorButton color="Red" onClick={() => handleColorClick("Red")} />
        <ColorButton color="Yellow" onClick={() => handleColorClick("Yellow")} />
        <ColorButton color="Blue" onClick={() => handleColorClick("Blue")} />
        <ColorButton color="Green" onClick={() => handleColorClick("Green")} />
      </div>
    </div>
  );
}

export default Page;

