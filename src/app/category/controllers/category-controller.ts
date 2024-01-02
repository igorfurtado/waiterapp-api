import { Request, Response } from 'express'
import CategoryRepository from '../repositories/category-repository'

class CategoryController {
  async index(request: Request, response: Response) {
    const categories = await CategoryRepository.findAll()

    response.status(200).json(categories)
  }

  async store(request: Request, response: Response) {
    const { name, icon } = request.body

    if (!name) {
      return response.status(400).json({ error: 'O nome é obrigatório.' })
    }

    if (!icon) {
      return response.status(400).json({ error: 'O ícone é obrigatório.' })
    }

    const category = await CategoryRepository.create({ name, icon })

    response.status(201).json(category)
  }
}

export default new CategoryController()
