import { Router } from 'express'

const router = Router()

// List orders
router.get('/orders', (req, res) => {
  res.send('OK')
})

// Create order
router.post('/orders', (req, res) => {
  res.send('OK')
})

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})

export default router
