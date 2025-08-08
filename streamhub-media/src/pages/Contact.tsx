import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you — your message has been recorded. Replace this handler with your backend or email integration.');
    event.currentTarget.reset();
  };

  return (
    <div className="card">
      <h2>Contact & Support</h2>
      <p className="small">Questions about billing, refunds or account access? Please use the form below.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full name <input name="name" required />
        </label>
        <label>
          Email <input name="email" type="email" required />
        </label>
        <label>
          Message <textarea name="message" rows={5} required />
        </label>
        <div style={{ marginTop: '10px' }}>
          <button className="btn">Send message</button>
        </div>
      </form>
      <div style={{ marginTop: '12px' }} className="small">
        Support hours: Mon–Fri 9:00–18:00 (local time). Response time within 24–48 hours.
      </div>
    </div>
  );
};

export default Contact;