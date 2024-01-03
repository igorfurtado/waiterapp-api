import { Router } from 'express'
import OrderController from '../controllers/order-controller'

const router = Router()

router.get('/orders', OrderController.index)
router.post('/orders', OrderController.store)
router.patch('/orders/:orderId', OrderController.update)
router.delete('/orders/:orderId', OrderController.delete)

export default router
