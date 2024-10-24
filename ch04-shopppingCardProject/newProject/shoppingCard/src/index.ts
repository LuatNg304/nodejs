import express from 'express'
import userRouter from './routes/users.routers'
import databseService from './services/database.services'

const app = express()
const PORT = 3000
databseService.connect()

app.use(express.json()) //server dung middleware bien doi cac chuoi json dc gui len thanh object
//app dung router
app.use('/users', userRouter)

// app.get('/', (req, res) => {
//   console.log(`HELLO WORLD`)
//   res.send('Hello')
// })
//http://localhost:3000/users/login
app.listen(PORT, () => {
  console.log('SERVER BE dang mo o port' + PORT)
})
