import { Request, Response, NextFunction } from 'express'
import { requestTimeMiddleware } from './requestTimeMiddleware'

describe('requestTimeMiddleware tests', () => {
  it('adds a timestamp to a request body', () => {
    const requestObject = {} as Request
    requestTimeMiddleware(
      requestObject,
      {} as Response,
      (() => {}) as NextFunction
    )
    expect(requestObject).toStrictEqual({
      timestamp: Date.now()
    })
  })
})
