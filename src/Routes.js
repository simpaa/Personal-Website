import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const Routes = (
  <div className="site-wrapper">

    <Header />

    <Router>
      <Route exact path="/" component={Home}>
      </Route>
    </Router>

    <Footer />

  </div>
);

export default Routes;
