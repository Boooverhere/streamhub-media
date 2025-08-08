import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('monthly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Checkout simulated for ${name} with plan: ${plan}.`);
    // Here you would typically handle the payment processing
  };

  return (
    <div className="checkout">
      <h2>Secure Checkout</h2>
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
          Plan
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="select"
          >
            <option value="monthly">Monthly - $14</option>
            <option value="quarterly">Quarterly - $38</option>
            <option value="annual">Annual - $135</option>
          </select>
        </label>
        <div style={{ marginTop: '10px' }}>
          <button className="btn">Proceed to payment</button>
        </div>
      </form>
      <div className="small" style={{ marginTop: '10px' }}>
        Payment descriptor (appears on bank statement): <strong>STREAMHUB MEDIA</strong>
      </div>
    </div>
  );
};

export default Checkout;