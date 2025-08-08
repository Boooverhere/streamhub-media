import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;