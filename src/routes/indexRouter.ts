import { Router } from 'express'
import helloWorldRouter from './helloWorld/helloWorldRouter'
import registerRouter from './register/registerRouter'

const indexRouter = Router()

indexRouter.use(helloWorldRouter)
indexRouter.use(registerRouter)

export default indexRouter
