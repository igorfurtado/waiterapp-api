import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

const errorHandler: ErrorRequestHandler = (
  error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.status(500).json({ error: 'Erro interno' })
}

export default errorHandler
