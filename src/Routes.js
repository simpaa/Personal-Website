import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Apps from './pages/Apps';

const Routes = (
  <Router>
    <div className="site-wrapper">

      <Header />

        <Route exact path="/" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/apps" component={Apps} />

      <Footer />

    </div>
  </Router>
);

export default Routes;
