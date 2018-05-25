import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron'

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="About" subtitle=" The about subtitle!" />
        <div className="container">
            <h2>Welcome About</h2>
        </div>
        <Footer />
      </div>
    )
  }
}
export default About