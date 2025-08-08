import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      <h2>Pricing & Billing</h2>
      <p>Choose the plan that works best for you:</p>
      <div className="pricing-grid">
        <div className="plan">
          <h4>Monthly</h4>
          <p>$14 / month</p>
          <p>Best for short-term access</p>
        </div>
        <div className="plan">
          <h4>Quarterly</h4>
          <p>$38 / 3 months</p>
          <p>Save 10% vs monthly</p>
        </div>
        <div className="plan">
          <h4>Annual</h4>
          <p>$135 / year</p>
          <p>Most popular — Save 20%</p>
        </div>
      </div>
      <p>All plans include member dashboard and priority support.</p>
    </div>
  );
};

export default Pricing;