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

  async update(request: Request, response: Response) {
    const { status } = request.body
    const { orderId } = request.params

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response
        .status(400)
        .json({ error: 'O status informado não é válido.' })
    }

    await OrderRepository.update({ status, orderId })

    response.sendStatus(204)
  }

  async delete(request: Request, response: Response) {
    const { orderId } = request.params
    const orders = await OrderRepository.delete(orderId)

    response.sendStatus(204)
  }
}

export default new OrderController()
