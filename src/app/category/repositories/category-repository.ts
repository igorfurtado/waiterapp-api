import { Category } from '../../models/Category'

class CategoryRepository {
  async findAll() {
    const categories = await Category.find()

    return categories
  }

  async create({ name, icon }: { name: string; icon: string }) {
    const createCategory = await Category.create({ name, icon })

    return createCategory
  }
}

export default new CategoryRepository()
