import { NextFunction, Request, Response } from 'express'
import { isValidRegisterRequest } from '../../utils/types/RegisterRequest'

export const registerValidationMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  if (
    isValidRegisterRequest(request.body) &&
    Object.keys(request.body).length === 2
  ) {
    next()
  } else {
    response.status(400).send({
      status: 400,
      message: 'Request body is invalid'
    })
  }
}
