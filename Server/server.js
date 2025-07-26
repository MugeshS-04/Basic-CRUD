import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDB from './db.js'
import addbooks from './controller.js'

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

connectDB()

app.get('/', (req, res) => {
    res.json("Api is Working")
})

app.post('/api/addbooks', addbooks)


app.listen(port,() => console.log("Server is listening on port 5000"))
