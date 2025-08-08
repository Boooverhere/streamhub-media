import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="pricing-page">
      <h2>Pricing & Billing</h2>
      <p>We offer flexible subscription plans to suit your needs:</p>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Billing</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly</td>
            <td>Auto-renew</td>
            <td>$14</td>
          </tr>
          <tr>
            <td>Quarterly</td>
            <td>Auto-renew</td>
            <td>$38</td>
          </tr>
          <tr>
            <td>Annual</td>
            <td>Auto-renew</td>
            <td>$135</td>
          </tr>
        </tbody>
      </table>
      <p>All plans include access to our member dashboard and priority support.</p>
    </div>
  );
};

export default Pricing;