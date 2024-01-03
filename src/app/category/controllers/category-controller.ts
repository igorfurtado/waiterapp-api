import { Request, Response } from 'express'
import CategoryRepository from '../repositories/category-repository'

class CategoryController {
  async index(request: Request, response: Response) {
    const categories = await CategoryRepository.findAll()

    response.status(200).json(categories)
  }

  async indexProducts(request: Request, response: Response) {
    const { categoryId } = request.params
    const products = await CategoryRepository.findProductsByCategory(categoryId)

    response.status(200).json(products)
  }

  async store(request: Request, response: Response) {
    const { name, icon } = request.body

    const category = await CategoryRepository.create({ name, icon })

    response.status(201).json(category)
  }
}

export default new CategoryController()
