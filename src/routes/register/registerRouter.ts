import { Router } from 'express'
import { requestTimeMiddleware } from '../../middleware/requestTimeMiddleware/requestTimeMiddleware'
import { registerValidationMiddleware } from '../../middleware/registerValidationMiddleware/registerValidationMiddleware'
import { registerController } from '../../controllers/register/registerController'

const registerRouter = Router()

registerRouter.post(
  '/register',
  requestTimeMiddleware,
  registerValidationMiddleware,
  registerController
)

export default registerRouter
