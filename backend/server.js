import express from 'express'
import cors from 'cors'
import Message from './model/Message.js'
import dbConnect from './db/dbConnection.js'
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(cors())

dbConnect()

// app.post('/')

app.post( '/api/register', async (req, res) => {
    console.log('data diterima dari frontend', req.body)
    const { name, message } = req.body
    const newMessage = await Message.create({
        name: name,
        message: message
    })
    console.log('register sudah dicreate: ', newMessage)
    res.json({message: name})
})

app.get('/api/messages', async (req, res) => {
    const allMessages = await Message.find().sort({createdAt: -1})
    console.table(allMessages)
    res.json(allMessages)
})

app.put('/api/messages/:id', async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    console.log(id)
    console.log(updateData)
    const editMessage = await Message.findByIdAndUpdate(id, updateData, {new: true})
res.status(200).json(editMessage)
    
})

app.delete('/api/messages/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await Message.findByIdAndDelete(id)
    console.log(deleted)
    res.json(deleted)
})


export default app