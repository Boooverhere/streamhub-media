import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="legal">
      <h2>Terms, Privacy & Refunds</h2>
      <div className="legal-section">
        <h3>Terms of Service</h3>
        <p>Users who purchase subscriptions agree to our terms. Subscriptions auto-renew until canceled. Accounts may be suspended for violations of our policies. We reserve the right to modify service features with notice to customers.</p>
      </div>
      <div className="legal-section">
        <h3>Privacy Policy</h3>
        <p>We collect essential customer data to provide subscriptions, process payments, and for fraud prevention. We do not share personal data with third parties except as required for payment processing and legal compliance.</p>
      </div>
      <div className="legal-section">
        <h3>Refund Policy</h3>
        <p>Customers may request a refund within 7 days of purchase for annual plans if they have not used the service. Refunds are processed through the original payment method and may take up to 10 business days.</p>
      </div>
    </div>
  );
};

export default Legal;