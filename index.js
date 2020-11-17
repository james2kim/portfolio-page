const path = require ('path')
const express = require ('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = process.env.PORT || 3001

// Set up static directory to serve in express

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
}) 

app.listen(port, () => {
    console.log('Server is starting')
})