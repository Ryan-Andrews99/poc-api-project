import { NextFunction, Request, Response } from 'express'

interface RequestWithTimestamp extends Request {
  timestamp?: number
}

export const requestTimeMiddleware = (
  request: RequestWithTimestamp,
  _response: Response,
  next: NextFunction
): void => {
  request.timestamp = Date.now()
  next()
}
