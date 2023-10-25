import { Request, NextFunction } from 'express'
import { registerValidationMiddleware } from './registerValidationMiddleware'
import { mockResponseObject } from '../../utils/test/mockResponseObject'

describe('register Validation Middleware tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('it sends a 400 code if the request body is invalid', () => {
    const mockedResponse = mockResponseObject()
    const badRequest = {
      body: {
        bozoProp: 'hello'
      }
    } as Request

    registerValidationMiddleware(
      badRequest,
      mockedResponse,
      (() => {}) as NextFunction
    )

    expect(mockedResponse.status).toHaveBeenCalledWith(400)
    expect(mockedResponse.send).toHaveBeenCalledWith({
      status: 400,
      message: 'Request body is invalid'
    })
  })
  it('It calls next if the request body is valid', () => {
    const nextFunction: NextFunction = jest.fn()
    const mockedResponse = mockResponseObject()
    const goodRequest = {
      body: {
        email: 'bozo456@gmail.com',
        password: 'password123'
      }
    } as Request

    registerValidationMiddleware(goodRequest, mockedResponse, nextFunction)

    expect(nextFunction).toBeCalledTimes(1)
  })
})
