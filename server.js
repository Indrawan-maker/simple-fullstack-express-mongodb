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
    console.log(allMessages)
    res.json(allMessages)
})


app.listen(process.env.PORT,() => console.log(`server running on port ${process.env.PORT}`))