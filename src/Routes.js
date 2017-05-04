import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const Routes = (
  <Router>
    <div className="site-wrapper">

      <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />

      <Footer />

    </div>
  </Router>
);

export default Routes;
