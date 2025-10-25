import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = new Schema({
    name: String,
    message: String
},
{
    timestamps: true
})
console.log('database is running')
const Message = model('Message', messageSchema);
export default Message

