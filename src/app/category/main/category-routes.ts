import { Router } from 'express'
import CategoryController from '../controllers/category-controller'
import createCategoryValidator from '../controllers/middlewares/category-schema'

const router = Router()

router.get('/categories', CategoryController.index)
router.post('/categories', createCategoryValidator, CategoryController.store)
router.get('/categories/:categoryId/products', CategoryController.indexProducts)

export default router
