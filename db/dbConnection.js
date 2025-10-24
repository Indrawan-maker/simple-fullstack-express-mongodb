import mongoose from 'mongoose'


export default function dbConnect() {
    mongoose.connect(process.env.DATABASE_URL)
    console.log('database succesfully connect')
}