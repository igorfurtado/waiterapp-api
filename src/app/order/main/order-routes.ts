import { Router } from 'express'
import OrderController from '../controllers/order-controller'

const router = Router()

router.get('/orders', OrderController.index)
router.post('/orders', OrderController.store)
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})

export default router
