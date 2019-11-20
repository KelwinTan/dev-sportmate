import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Login from './components/Login';
import SimpleMap from './components/SimpleMap';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/map">
            <SimpleMap />
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;