import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'
import ProductController from '../controllers/product-controller'

const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../../../..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

router.get('/products', ProductController.index)
router.post('/products', upload.single('image'), ProductController.store)
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

export default router
