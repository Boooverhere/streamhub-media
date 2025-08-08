import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you — your message has been recorded. Replace this handler with your backend or email integration.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2>Contact & Support</h2>
      <p>Questions about billing, refunds or account access? Please use the form below.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </label>
        <div>
          <button type="submit">Send message</button>
        </div>
      </form>
      <div>Support hours: Mon–Fri 9:00–18:00 (local time). Response time within 24–48 hours.</div>
    </div>
  );
};

export default Contact;