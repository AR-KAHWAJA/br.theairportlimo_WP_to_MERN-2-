import { Router } from 'express'
import mongoose from 'mongoose'
import ContactMessage from '../models/ContactMessage.js'
import { sendNotificationEmail } from '../config/mailer.js'

const router = Router()

const REQUIRED_FIELDS = ['fullName', 'email', 'phone', 'inquiryType', 'message']

router.post('/', async (req, res) => {
  const missing = REQUIRED_FIELDS.filter((field) => !req.body?.[field])

  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing required field(s): ${missing.join(', ')}` })
  }

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ message: 'Database is not connected. Please try again later.' })
  }

  try {
    const { fullName, email, phone, inquiryType, message } = req.body
    const contactMessage = await ContactMessage.create({ fullName, email, phone, inquiryType, message })

    sendNotificationEmail({
      subject: `New ${inquiryType} inquiry from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nType: ${inquiryType}\nMessage:\n${message}`
    })

    return res.status(201).json({ message: 'Message received', contactMessage })
  } catch (err) {
    console.error('[contact] Failed to save contact message:', err.message)
    return res.status(500).json({ message: 'Something went wrong. Please try again.' })
  }
})

export default router
