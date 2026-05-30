import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Bus Reservation System</h1>
        <p>Book your bus tickets easily and conveniently</p>
        <Link to="/search" className="btn btn-primary">
          Search Buses
        </Link>
      </div>
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>Simple and quick booking process</p>
          </div>
          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Competitive pricing with discounts</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payment</h3>
            <p>Safe and secure payment methods</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Customer support always available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
