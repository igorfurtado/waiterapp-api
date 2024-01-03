import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'
import categoryRoutes from './app/category/main/category-routes'
import orderRoutes from './app/order/main/order-routes'
import productRoutes from './app/product/main/product-routes'
import errorHandler from './shared/error-handler'

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001
    const app = express()

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )
    app.use(express.json())

    app.use(categoryRoutes)
    app.use(productRoutes)
    app.use(orderRoutes)

    app.use(errorHandler)

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`)
    })
  })
  .catch(() =>
    console.log('❌ An error occurred when trying to connect to MongoDb')
  )
