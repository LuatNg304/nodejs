const fullName: string = 'Diep dep trai'

// co the dinh nghia kieu du lieu moi  bang type
type Handle = () => Promise<String>

const handleF: Handle = () => Promise.resolve('Ahihi')
handleF().then((value) => {
  console.log(value)
})
const person: { name: String; age: number } = {
  name: 'Diep',
  age: 22
}
