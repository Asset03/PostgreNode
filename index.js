const express = require('express')
const router = require('./routes/user-route')
const postRouter = require('./routes/post-route')

const PORT = 8080;

const app = express()

app.use(express.json())
app.use('/api',router)
app.use('/api',postRouter)

app.listen(PORT,()=>console.log(`Server started on Port ${PORT}`))