import { Router } from 'express'

const router = Router()

// List products
router.get('/products', (req, res) => {
  res.send('OK')
})

// Create product
router.post('/products', (req, res) => {
  res.send('OK')
})

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

export default router
