import React from 'react';

const Checkout: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Checkout simulated. Replace with your payment provider integration.');
  };

  return (
    <div className="card">
      <h2>Secure Checkout</h2>
      <p className="small">
        This checkout form is a placeholder. Replace with your payment provider integration.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Full name <input name="name" required />
        </label>
        <label>
          Email <input name="email" type="email" required />
        </label>
        <label>
          Plan
          <select name="plan" className="select">
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