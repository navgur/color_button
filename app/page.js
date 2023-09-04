  "use client"
import React, { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import CountBox from './CountBox';
import ColorButton from './ColorButton';

const initialCountColor = {
  Red: 0,
  Yellow: 0,
  Blue: 0,
  Green: 0
};

function Page= () => {
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
      <CountBox colorcount={colorCounts} /></div>
      <div className="button-container">
        <ColorButton color="Red" onClick={handleColorClick} />
        <ColorButton color="Yellow" onClick={handleColorClick} />
        <ColorButton color="Blue" onClick={handleColorClick} />
        <ColorButton color="Green" onClick={handleColorClick} />
      </div>
    </div>
  );
}

export default Page;

