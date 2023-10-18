import { Request, Response } from 'express'

export const helloWorldController = (_request: Request, response: Response) => {
  response.status(200).send({
    status: 200,
    message: 'Hello World'
  })
}
