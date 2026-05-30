# Bus Reservation Simulation System

A comprehensive, production-ready bus reservation system with real-time booking, dynamic pricing, payment processing, and advanced analytics.

## 🌟 Features

### User Management
- User registration and authentication (JWT)
- Role-based access control (Admin, Customer)
- User profiles and account management
- Password reset and email verification

### Bus Management
- Multiple buses with different configurations
- Flexible seat layouts (2x2, 2x3, custom configurations)
- Bus amenities (WiFi, AC, Charging, Restroom)
- Bus availability and schedule management

### Booking System
- Real-time seat availability
- Instant booking confirmation
- Multiple booking states (Pending, Confirmed, Cancelled)
- Seat hold system with auto-release timeout
- Booking history and invoice generation

### Payment Processing
- Multiple payment methods (Card, UPI, Net Banking)
- Stripe integration for secure payments
- Transaction history and receipts
- Refund processing with automatic calculation

### Dynamic Pricing
- Base fare calculation
- Demand-based pricing surge
- Advance booking discounts
- Promo code and coupon system

### Analytics & Reporting
- Revenue analytics and dashboards
- Occupancy rate tracking
- Popular routes analysis
- Customer statistics

### Admin Dashboard
- Bus fleet management
- Route and schedule management
- Booking oversight and management
- Revenue reports and analytics

## 🛠 Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: React + Redux + Material-UI
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment**: Stripe
- **Deployment**: Docker

## 📁 Project Structure

```
bus-reservation-system/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── config/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── services/
│   └── package.json
└── docker-compose.yml
```

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Dhanush17868/-bus-reservation-system.git
cd -bus-reservation-system

# Using Docker (Recommended)
docker-compose up -d

# Manual setup
cd backend && npm install && npm run dev
cd ../frontend && npm install && npm start
```

## 📝 License

MIT License
