import { Request, Response } from 'express'

export const registerController = (_request: Request, response: Response) => {
  response.status(200).send({
    status: 200,
    message: 'Sign up successful'
  })
}
