require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors  = require('cors')
const connectDB = require('./db/conn')
const studentRouter = require("./routes/studentRoutes")

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN1,
  credentials:true
}))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/student",studentRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})