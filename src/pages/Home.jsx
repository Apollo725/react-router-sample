import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Home" subtitle=" Put something witty here!" />
        <div className="container">
            <h2>Welcome Home</h2>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home