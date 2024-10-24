import express from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator } from '~/middlewares/users.middlewares'
const userRouter = express.Router()

//handler
userRouter.post('/login', loginValidator, loginController)

//phat trien tinh nang register
//users/register req.body {email va password}
userRouter.post('/register', registerController)
export default userRouter
