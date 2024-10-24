//import cac interface cua express
import { Request, Response, NextFunction } from 'express'
//middleware la  handler co nhiem vy kiem trs cac du lieu ma nguoi dung gui len thong qua request
//middleware  giu vai tro kiem tra du lieu du va dung kieu

//bay gio se mo ta truc nang dang nhap
//neu mot nguoi dung muon dang nhap ho se gui len email va password
//thong qua req.body
export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  //kiem tra
  //lay thu email va password benh trong body nguoi dung gui len
  const { email, password } = req.body
  //kiem tra email co dc gui len hay khong
  if (!email || !password) {
    res.status(422).json({
      //422: gui thieu
      message: 'Missing email or password'
    })
  } else {
    next()
  }
}
