import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDB from './db.js'
import {addbooks, getbooks, deletebooks, updatebook} from './controller.js'

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

connectDB()

app.get('/', (req, res) => {
    res.json("Api is Working")
})

app.post('/api/addbooks', addbooks)
app.get('/api/getbooks', getbooks)
app.delete('/api/deletebooks/:id', deletebooks)
app.put('/api/updatebooks/:id', updatebook)


app.listen(port,() => console.log("Server is listening on port 5000"))
