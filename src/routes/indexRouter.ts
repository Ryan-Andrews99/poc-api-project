import { Router } from 'express'
import helloWorldRouter from './helloWorld/helloWorldRouter'

const indexRouter = Router()

indexRouter.use(helloWorldRouter)

export default indexRouter
