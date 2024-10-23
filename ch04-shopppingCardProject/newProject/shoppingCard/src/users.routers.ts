import express from 'express'
const userRouter = express.Router()
//midldleware cho userRouter
userRouter.use((req, res, next) => {
  console.log('Time ', Date.now())
  return next()
  //res.status(400).send('Not Alloweed')
  //console.log('ahihi') //do return tren nene kh in ra ahihi
})
userRouter.use((req, res, next) => {
  console.log('1')

  console.log('Time2 ', Date.now())
  next()
})
//handler
userRouter.get('/get-me', (req, res) => {
  res.json({
    data: 'Hello'
  })
})
export default userRouter
