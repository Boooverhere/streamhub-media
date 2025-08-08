import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
    </div>
  );
};

export default Home;