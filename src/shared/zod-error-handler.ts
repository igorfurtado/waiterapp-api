import { ZodIssue } from 'zod'
import { ErrorDataResponse } from './data/error-data-response'

export const zodErrorHandling = (
  zodErrors: ZodIssue[]
): ErrorDataResponse[] => {
  const errors = zodErrors.map((err: ZodIssue) => {
    return {
      field: err.path.reduce((acc, curr) => `${acc}.${curr}`),
      message: err.message
    }
  })

  return errors
}
