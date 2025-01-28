import React from 'react';
import './styles.css';

const BusinessCard = () => {
  return (
    <div className="card">
      <img src="/profile.jpg" alt="Your Image" className="profile-img" />
      <h1 className="name">Brett Bougher/h1>
      <p className="email">
        <a href="mailto:brett.bougher@icloud.com">brett.bougher@icloud.com</a>
      </p>
      <p className="phone">
        <a href="tel:843-359-1319">843-359-1319</a>
      </p>
      <p className="github">
        <a href="https://github.com/brettbougher" target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </p>
    </div>
  );
};

export default BusinessCard;
