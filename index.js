import express from 'express'
import mongoose from 'mongoose'
import productRoute from './routes/product.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/product', productRoute)

app.get('/', (req, res) => {
    res.send('Nodejs server api is running...')
})

app.listen(80, () => {
    console.log('Server is running...')
})

mongoose
    .connect('mongodb://localhost:27017/r')
    .then(() => {
        console.log('connected to database!')
    })
    .catch(() => {
        console.log('connection failed!')
    })
