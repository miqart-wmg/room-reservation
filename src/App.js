import React from 'react';
import Nav from './components/Nav/Nav';
import Rooms from './pages/Rooms/Rooms';
import Visitors from './pages/Visitors/Visitors';
import Bookings from './pages/Bookings/Bookings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Rooms} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/visitors" component={Visitors} />
          <Route path="/bookings" component={Bookings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
