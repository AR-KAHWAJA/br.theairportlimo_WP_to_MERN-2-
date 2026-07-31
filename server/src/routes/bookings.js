import { Router } from 'express'
import mongoose from 'mongoose'
import Booking from '../models/Booking.js'
import { sendNotificationEmail } from '../config/mailer.js'

const router = Router()

const REQUIRED_FIELDS = ['date', 'time', 'pickup', 'dropoff', 'name', 'phone', 'email']

router.post('/', async (req, res) => {
  const missing = REQUIRED_FIELDS.filter((field) => !req.body?.[field])

  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing required field(s): ${missing.join(', ')}` })
  }

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ message: 'Database is not connected. Please try again later.' })
  }

  try {
    const {
      date,
      time,
      pickup,
      pickupLatitude,
      pickupLongitude,
      dropoff,
      dropoffLatitude,
      dropoffLongitude,
      name,
      phone,
      email
    } = req.body

    const booking = await Booking.create({
      date,
      time,
      pickup,
      pickupLatitude: pickupLatitude || undefined,
      pickupLongitude: pickupLongitude || undefined,
      dropoff,
      dropoffLatitude: dropoffLatitude || undefined,
      dropoffLongitude: dropoffLongitude || undefined,
      name,
      phone,
      email
    })

    sendNotificationEmail({
      subject: `New booking request from ${name}`,
      text: `Date: ${date}\nTime: ${time}\nPickup: ${pickup}\nDrop off: ${dropoff}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`
    })

    return res.status(201).json({ message: 'Booking received', booking })
  } catch (err) {
    console.error('[bookings] Failed to save booking:', err.message)
    return res.status(500).json({ message: 'Something went wrong. Please try again.' })
  }
})

export default router
