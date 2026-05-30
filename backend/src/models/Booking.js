const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    scheduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
      required: true
    },
    busId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bus',
      required: true
    },
    routeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Route',
      required: true
    },
    seats: [String],
    passengers: [{
      name: String,
      email: String,
      phone: String,
      age: Number,
      gender: String
    }],
    totalPrice: {
      type: Number,
      required: true,
      min: 0
    },
    discountApplied: {
      type: Number,
      default: 0,
      min: 0
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending'
    },
    paymentId: mongoose.Schema.Types.ObjectId,
    bookingReference: {
      type: String,
      unique: true
    },
    bookingDate: {
      type: Date,
      default: Date.now
    },
    journeyDate: Date,
    cancellationDate: Date,
    cancellationReason: String,
    refundAmount: Number,
    cancellationCharge: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

bookingSchema.index({ userId: 1, journeyDate: 1 });
bookingSchema.index({ bookingReference: 1 });

// Generate booking reference
bookingSchema.pre('save', async function(next) {
  if (!this.bookingReference) {
    this.bookingReference = 'BUS' + Date.now() + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
