import mongoose from 'mongoose'

export async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    console.warn('[db] MONGODB_URI is not set. API will run, but form submissions will fail to save.')
    return
  }

  try {
    await mongoose.connect(uri)
    console.log('[db] Connected to MongoDB')
  } catch (err) {
    console.error('[db] Failed to connect to MongoDB:', err.message)
  }
}
