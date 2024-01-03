import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { zodErrorHandling } from '../../../../shared/zod-error-handler'

const createCategoryValidator = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const categorySchema = z.object({
      name: z
        .string({ required_error: 'Informe o nome' })
        .min(1, { message: 'Informe o nome' }),
      icon: z
        .string({ required_error: 'Informe o ícone' })
        .min(1, { message: 'Informe o ícone' })
    })

    categorySchema.parse(request.body)
    next()
  } catch (error) {
    const err = error as z.ZodError

    response.status(400).json(zodErrorHandling(err.errors))
  }
}

export default createCategoryValidator
