import React from 'react';
import './Featur.css';

const Featur = ({ p, span, icon }) => {
  return (
    <div className="featur-container">
      <div className="featur-icon">{icon}</div>
      <div className="featur-text">
        <span className="featur-title">{span}</span>
        <p className="featur-desc">{p}</p>
      </div>
    </div>
  );
};

export default Featur;
