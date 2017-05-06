import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Apps from './pages/Apps';
import PageNotFound from './pages/PageNotFound';
import PortfolioDetail from './pages/PortfolioDetail';

const Routes = (
  <Router>
    <div className="site-wrapper">

      <Header />

        <div className="site-content">
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/apps" component={Apps} />
            <Route path="/portfolio/:id" component={PortfolioDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>

      <Footer />

    </div>
  </Router>
);

export default Routes;
