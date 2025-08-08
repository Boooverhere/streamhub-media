import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div className="small">© {new Date().getFullYear()} StreamHub Media Ltd — All rights reserved.</div>
          <div className="small">Support: support@streamhubmedia.example</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;