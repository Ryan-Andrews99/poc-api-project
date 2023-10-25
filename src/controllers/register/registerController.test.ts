import { Request } from 'express'
import { mockResponseObject } from '../../utils/test/mockResponseObject'
import { registerController } from './registerController'

describe('HelloWorldController tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('returns a 200 when the request body contains both a email and password', () => {
    const mockedResponseObject = mockResponseObject()
    registerController(
      {
        body: JSON.stringify({
          email: 'aTestUser@ripbozo.com',
          password: 'bozo123'
        })
      } as Request,
      mockedResponseObject
    )

    expect(mockedResponseObject.status).toHaveBeenCalledWith(200)
    expect(mockedResponseObject.send).toHaveBeenCalledWith({
      status: 200,
      message: 'Sign up successful'
    })
  })
})
