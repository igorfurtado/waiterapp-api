import { Request, Response } from 'express'
import OrderRepository from '../repositories/order-repository'

class OrderController {
  async index(request: Request, response: Response) {
    const orders = await OrderRepository.findAll()

    response.status(200).json(orders)
  }

  async store(request: Request, response: Response) {
    const { table, products } = request.body

    const order = await OrderRepository.create({ table, products })

    response.status(201).json(order)
  }
}

export default new OrderController()
