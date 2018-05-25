import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact Us" subtitle=" You can contact us here!" />
        <div className="container">
            <h2>Welcome Contact Us</h2>
        </div>
        <Footer />
      </div>
    )
  }
}
export default ContactUs