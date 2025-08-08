import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <strong>How do I cancel my subscription?</strong>
        <p>You can cancel your subscription at any time through your account dashboard or by contacting our support team.</p>
      </div>
      <div className="faq-item">
        <strong>What payment methods do you accept?</strong>
        <p>We accept various payment methods including credit cards, PayPal, and cryptocurrency.</p>
      </div>
      <div className="faq-item">
        <strong>How do I access my purchased content?</strong>
        <p>After successful payment, you will receive access credentials via email. You can log in to your member dashboard to access your content.</p>
      </div>
      <div className="faq-item">
        <strong>What is your refund policy?</strong>
        <p>Customers may request a refund within 7 days of purchase for annual plans if they have not used the service. Refunds are processed through the original payment method.</p>
      </div>
      <div className="faq-item">
        <strong>How can I contact support?</strong>
        <p>You can reach our support team via the contact form on our website or by emailing support@streamhubmedia.example.</p>
      </div>
    </div>
  );
};

export default FAQ;