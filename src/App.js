import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import ContactUs from '../src/pages/ContactUs.jsx';
class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contactus" component={ContactUs}/>
       </div>
     </Router>
    );
  }
}

export default App;
