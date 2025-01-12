import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RideRequestForm from './components/RideRequestForm';
import DriverDashboard from './components/DriverDashboard';
import RideTracking from './components/RideTracking';

import './style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/request-ride" component={RideRequestForm} />
        <Route path="/driver-dashboard" component={DriverDashboard} />
        <Route path="/ride-tracking" component={RideTracking} />
        <Route path="/" exact component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
