import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    time: { type: String, required: true },
    pickup: { type: String, required: true },
    pickupLatitude: { type: Number },
    pickupLongitude: { type: Number },
    dropoff: { type: String, required: true },
    dropoffLatitude: { type: Number },
    dropoffLongitude: { type: Number },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('Booking', bookingSchema)
