/**
 * @file com/pricing-card/index.jsx
 * Presents our pricing cards.
 */

// Imports
import React from 'react';
import './index.scss';

// Component
const PricingCard = ({
  tierName,
  popular = false,
  monthlyPrice,
  annualPrice,
  showAnnualPrice,
  features
} = {}) => (
  <div className={`fm-pricing-card ${popular === true ? 'popular' : ''}`}>
    <h2>{tierName}</h2>
    <p>{showAnnualPrice === true ? annualPrice : monthlyPrice}</p>
    <ul>
      {features.map((feature, index) => <li key={index}>{feature}</li>)}
    </ul>
    <a href="#">Learn More</a>
  </div>
);

// Export
export default PricingCard;
