import { Product } from '../../models/Product'
import { Category } from '../../models/Category'

class CategoryRepository {
  async findAll() {
    const categories = await Category.find()

    return categories
  }

  async findProductsByCategory(categoryId: string) {

    const product = await Product.find().where('category').equals(categoryId)

    return product
  }

  async create({ name, icon }: { name: string; icon: string }) {
    const createCategory = await Category.create({ name, icon })

    return createCategory
  }
}

export default new CategoryRepository()
