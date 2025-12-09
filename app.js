const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.json({ success: true, message: "'Keshav Agrawal's Server Is Running" })
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Started')
})
