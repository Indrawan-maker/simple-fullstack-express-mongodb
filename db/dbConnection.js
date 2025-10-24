import mongoose from 'mongoose'


export default function dbConnect() {
    mongoose.connect('mongodb+srv://indrawanismail0:lhHxqPXc8ZLvOj8t@cluster-1.bkbtnk3.mongodb.net/')
    console.log('database succesfully connect')
}