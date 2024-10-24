import databseService from './database.services'
import User from '~/models/schemas/User.schema'
class UsersServices {
  async register(payLoad: { email: string; password: string }) {
    const { email, password } = payLoad
    const result = await databseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    return result
  }
}
//tao ra 1 instance
const usersServices = new UsersServices()
export default usersServices
