import { Product } from '../../models/Product'

class ProductRepository {
  async findAll() {
    const categories = await Product.find()

    return categories
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
    imagePath: string
    price: number
    ingredients: {
      name: string
      icon: string
    }[]
    category: string
  }) {
    const createCategory = await Product.create({
      name,
      price,
      category,
      description,
      imagePath,
      ingredients
    })

    return createCategory
  }
}

export default new ProductRepository()
