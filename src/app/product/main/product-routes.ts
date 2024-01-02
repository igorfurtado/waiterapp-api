import { Router } from 'express'
import ProductController from '../controllers/product-controller'

const router = Router()

router.get('/products', ProductController.index)
router.post('/products', ProductController.store)
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

export default router
