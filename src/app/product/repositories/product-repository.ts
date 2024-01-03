import { Product } from '../../models/Product'

class ProductRepository {
  async findAll() {
    const products = await Product.find()

    return products
  }

  async create({
    name,
    price,
    category,
    description,
    imagePath,
    ingredients
  }: {
    name: string
    description: string
    imagePath: string | undefined
    price: number
    ingredients: {
      name: string
      icon: string
    }[]
    category: string
  }) {
    const createdProduct = await Product.create({
      name,
      price,
      category,
      description,
      imagePath,
      ingredients
    })

    return createdProduct
  }
}

export default new ProductRepository()
