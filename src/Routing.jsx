import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChartsAndGraphsOverview from '@bit/pmaier983.charts-and-graphs.charts-and-graphs-overview';
import App from './App';

const Routing = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/data-visualizer" component={ChartsAndGraphsOverview} />
  </Router>
);

export default Routing;
