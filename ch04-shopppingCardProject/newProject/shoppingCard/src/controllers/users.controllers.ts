import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databseService from '~/services/database.services'
import usersServices from '~/services/users.services'
//controller la hnadle co nv tap ket du lieu nguou dung
//va phan phat vao cac server dung cho

//controller la noi tap ket va xu ly logiccho cac du lieu nhan duoc
//trong controller cac du lieu deu pjai clean

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  //len database kt emai va password
  if (email === 'lehodiep@gmail.com' && password === '123456') {
    res.status(200).json({
      //200 xac thuc thanh cong
      message: 'Login successfully !!!',
      data: {
        fname: 'Diep number 1',
        yob: 1999
      }
    })
  } else {
    res.status(401).json({
      //401 xac thuc that bai
      message: 'Invalid email or password'
    })
  }
}
export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  //service va luu vao database
  //luu user do vao users collection cua mongoDB
  try {
    const result = await usersServices.register(
      new User({
        email,
        password
      })
    )
    res.status(201).json({
      message: 'Register successFully!!',
      data: result
    })
  } catch (error) {
    res.status(422).json({
      message: 'Register fall',
      error
    })
  }
}
