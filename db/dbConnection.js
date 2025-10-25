import mongoose from 'mongoose'
import 'dotenv/config'

export default async function dbConnect() {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('database succesfully connect')
}