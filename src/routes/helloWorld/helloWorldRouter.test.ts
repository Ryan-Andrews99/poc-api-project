import { Request, Response, NextFunction } from 'express'
import { requestTimeMiddleware } from '../../middleware/requestTimeMiddleware/requestTimeMiddleware'
import request from 'supertest'
import app from '../../app'

jest.mock(
  '../../middleware/requestTimeMiddleware/requestTimeMiddleware',
  () => ({
    requestTimeMiddleware: jest.fn(
      (_req: Request, _res: Response, next: NextFunction) => next()
    )
  })
)

describe('helloWorld Endpoint tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns a 200 regardless of request and calls the requestTimeMiddleware with the correct parameters', async () => {
    const dummyRequest = {} as Request
    const res = await request(app).get('/helloWorld').send(dummyRequest)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual({
      status: 200,
      message: 'Hello World'
    })
    expect(requestTimeMiddleware).toHaveBeenCalled()
  })
})
