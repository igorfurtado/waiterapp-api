import { Request, Response } from 'express'
import ProductRepository from '../repositories/product-repository'

class ProductController {
  async index(request: Request, response: Response) {
    const products = await ProductRepository.findAll()

    response.status(200).json(products)
  }

  async store(request: Request, response: Response) {
    const { name, category, description, imagePath, ingredients, price } =
      request.body

    if (!name) {
      return response.status(400).json({ error: 'O nome é obrigatório.' })
    }

    const product = await ProductRepository.create({
      name,
      category,
      description,
      imagePath,
      ingredients,
      price
    })

    response.status(201).json(product)
  }
}

export default new ProductController()
