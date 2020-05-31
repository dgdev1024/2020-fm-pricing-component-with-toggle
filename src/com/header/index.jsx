/**
 * @file com/header/index.jsx
 * Presents the top of the page, with the switch to toggle monthly and yearly
 * prices.
 */

// Imports
import React from 'react';
import './index.scss';

// Components
const Header = ({ togglePricing, showAnnualPricing }) => (
  <header>
    <h1>Our Pricing</h1>
    <div className="fm-pricing-toggle">
      <span>Annually</span>
      <button
        type="button"
        className={showAnnualPricing === true ? 'on' : ''}
        aria-label="Toggle Annual Pricing"
        onClick={togglePricing}
      >
        <span className="fm-button-notch"></span>
      </button>
      <span>Monthly</span>
    </div>
  </header>
);

// Export
export default Header;
