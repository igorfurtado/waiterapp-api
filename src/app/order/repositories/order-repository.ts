import { Order } from '../../models/Order'

class OrderRepository {
  async findAll() {
    const orders = await Order.find()

    return orders
  }

  async create({
    table,
    products
  }: {
    table: string
    products: { product: string; quantity: number }
  }) {
    const createdOrder = await Order.create({ table, products })

    return createdOrder
  }
}

export default new OrderRepository()
