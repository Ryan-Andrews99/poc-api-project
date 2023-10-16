import { Response } from 'express'

export const mockResponseObject = () => {
  const mockedResponseObject = {
    send: jest.fn(() => mockedResponseObject),
    status: jest.fn(() => mockedResponseObject)
  } as unknown as Response

  return mockedResponseObject
}
