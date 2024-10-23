import express from 'express'
import userRouter from './users.routers'
const app = express()
const PORT = 3000
//dung userRouter

//app dung router
app.use('/users', userRouter)

app.get('/', (req, res) => {
  console.log(`HELLO WORLD`)
  res.send('Hello')
})
//http://localhost:3000/
app.listen(PORT, () => {
  console.log('SERVER BE dang mo o port' + PORT)
})
