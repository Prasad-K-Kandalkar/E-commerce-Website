import express from 'express'
import products from'./Data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/ProductRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
const app = express()

dotenv.config()
connectDB()
app.get('/',(req,res)=>{
    res.send('Api is running')
})

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)




const PORT = process.env.PORT || 5000
app.listen(5000,console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`))