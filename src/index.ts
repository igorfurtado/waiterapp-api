import express from 'express'
import mongoose from 'mongoose'
import categoryRoutes from './app/category/main/category-routes'
import orderRoutes from './app/order/main/order-routes'
import productRoutes from './app/product/main/product-routes'

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001
    const app = express()

    app.use(express.json())

    app.use(categoryRoutes)
    app.use(productRoutes)
    app.use(orderRoutes)

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`)
    })
  })
  .catch(() =>
    console.log('❌ An error occurred when trying to connect to MongoDb')
  )
