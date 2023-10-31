import { Request, Response, NextFunction } from 'express'
import { registerValidationMiddleware } from '../../middleware/registerValidationMiddleware/registerValidationMiddleware'
import request from 'supertest'
import app from '../../app'

jest.mock(
  '../../middleware/registerValidationMiddleware/registerValidationMiddleware',
  () => ({
    registerValidationMiddleware: jest.fn(
      (_req: Request, _res: Response, next: NextFunction) => next()
    )
  })
)

describe('register Endpoint tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('calls the correct middleware and returns a 200', async () => {
    const dummyRequest = {
      body: {
        email: 'bozo456@gmail.com',
        password: 'password123'
      }
    } as Request

    const res = await request(app).post('/register').send(dummyRequest)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual({
      status: 200,
      message: 'Sign up successful'
    })
    expect(registerValidationMiddleware).toHaveBeenCalled()
  })
})
