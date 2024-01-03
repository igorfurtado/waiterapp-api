import { Order } from '../../models/Order'

class OrderRepository {
  async findAll() {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product')

    return orders
  }

  async create({
    table,
    products
  }: {
    table: string
    products: { product: string; quantity: number }
  }) {
    const createdOrder = (await Order.create({ table, products })).populate(
      'products.product'
    )

    return createdOrder
  }

  async update({
    status,
    orderId
  }: {
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
    orderId: string
  }) {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status })

    return updatedOrder
  }

  async delete(orderId: string) {
    const result = await Order.findByIdAndDelete(orderId)

    return result
  }
}

export default new OrderRepository()
