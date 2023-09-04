import React from 'react';
import ColorDisplay from './ColorDisplay';

const CountBox = ({ colorcount}) => {
  return (
    <div>
      <div className="color-box">
        <div className="redcounts">
          Redcounts: {colorcount["Red"]}
          <div className="yellowcounts">
            Yellowcounts: {colorcount["Yellow"]}
          </div>
          <div className="greencounts">
            Greencounts: {colorcount["Blue"]}
          </div>
          <div className="bluecounts">
            Bluecounts: {colorcount["Green"]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountBox;

