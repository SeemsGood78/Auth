const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const Port = process.env.Port || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Albert:Albert123@cluster0.5knncra.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(Port, () => console.log(`server started on port ${Port}`))
    } catch (e) {
        console.log(e)
    }
}

start()