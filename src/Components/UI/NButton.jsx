import React from 'react';
import './NButton.css';

const NButton = ({ name }) => {
  return (
    <div className="nbutton-wrapper">
      <button className="nbutton">{name}</button>
    </div>
  );
};

export default NButton;
