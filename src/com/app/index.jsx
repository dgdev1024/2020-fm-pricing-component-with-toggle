/**
 * @file com/app/index.jsx
 * The app's primary component.
 */

// Imports
import React, { useState } from 'react';
import Header from '../header';
import PricingCard from '../pricing-card';
import './index.scss';

// Component
const App = () => {
  const [showAnnual, setShowAnnual] = useState(false);
  const toggleAnnualPricing = () => setShowAnnual(!showAnnual);

  return (
    <main>
      <Header 
        togglePricing={toggleAnnualPricing} 
        showAnnualPricing={showAnnual} 
      />
      <div className="fm-pricing-cards">
        <PricingCard
          showAnnualPrice={showAnnual}
          tierName="Basic"
          monthlyPrice="$19.99"
          annualPrice="$199.99"
          features={[
            "500 GB Storage",
            "2 Users Allowed",
            "Send up to 3 GB"
          ]}
        />
        <PricingCard
          showAnnualPrice={showAnnual}
          popular={true}
          tierName="Professional"
          monthlyPrice="$24.99"
          annualPrice="$249.99"
          features={[
            "1 TB Storage",
            "5 Users Allowed",
            "Send up to 10 GB"
          ]}
        />
        <PricingCard
          showAnnualPrice={showAnnual}
          tierName="Master"
          monthlyPrice="$39.99"
          annualPrice="$399.99"
          features={[
            "2 TB Storage",
            "10 Users Allowed",
            "Send up to 20 GB"
          ]}
        />
      </div>
    </main>
  );
};

// Export
export default App;
