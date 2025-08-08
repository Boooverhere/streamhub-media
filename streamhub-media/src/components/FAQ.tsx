import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h2>FAQ</h2>
      <div>
        <strong>How do I cancel?</strong>
        <div className="small">You can cancel auto-renew from your account dashboard or contact support.</div>
      </div>
      <div style={{ marginTop: '8px' }}>
        <strong>How do I get access after payment?</strong>
        <div className="small">Access credentials are emailed within 1 hour of confirmed payment.</div>
      </div>
    </div>
  );
};

export default FAQ;