import { Request, Response, NextFunction } from 'express'
import { requestTimeMiddleware } from './requestTimeMiddleware'

describe('requestTimeMiddleware tests', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(1000)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('adds a timestamp to a request body', () => {
    const requestObject = {} as Request
    requestTimeMiddleware(
      requestObject,
      {} as Response,
      (() => {}) as NextFunction
    )
    expect(requestObject).toStrictEqual({
      timestamp: 1000
    })
  })
})
