const express = require('express')
const app = express()
const port = 3000
const chat = require('./route/chat')
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/chat', chat);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})