import { Router } from 'express'
import { helloWorldController } from '../../controllers/helloWorld/helloWorldController'
import { requestTimeMiddleware } from '../../middleware/requestTimeMiddleware/requestTimeMiddleware'

const helloWorldRouter = Router()

helloWorldRouter.get('/helloWorld', requestTimeMiddleware, helloWorldController)

export default helloWorldRouter
