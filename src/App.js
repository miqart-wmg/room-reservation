import React from 'react';
import Nav from './components/Nav/Nav';
import Rooms from './pages/Rooms/Rooms';
import Visitors from './pages/Visitors/Visitors';
import Bookings from './pages/Bookings/Bookings';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router basename="/room-reservation">
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/rooms" />
          </Route>
          <Route path="/rooms" component={Rooms} />
          <Route path="/visitors" component={Visitors} />
          <Route path="/bookings" component={Bookings} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
