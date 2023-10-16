import { Request } from 'express'
import { mockResponseObject } from '../../utils/test/mockResponseObject'
import { helloWorldController } from './helloWorldController'

describe('HelloWorldController tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('returns a 200 regardless of the input', () => {
    const mockedResponse = mockResponseObject()
    helloWorldController({} as Request, mockedResponse)
    expect(mockedResponse.status).toHaveBeenCalledWith(200)
    expect(mockedResponse.send).toHaveBeenCalledWith({
      status: 200,
      message: 'Hello World'
    })
  })
})
