import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// შექმენით რაღაცა form ტეგი, რომელშიც იქნება 4 ინფუთი და ერთი submit ღილაკი.
// თქვენი დავალებაა გამოიყენოთ ერთი state ამ ოთხივე ინფუთთან მუშაობისათვის
// submit ღილაკზე დაჭერით დააკონსოლ ლოგეთ ამ ინფუთების მნიშვნელობები.
// არ დაგავიწყდეთ label ტეგები 
function App() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    pass: '',
    number: ''
  })
  return (
    <>
      <form className='flex flex-col justify-center items-center' onSubmit={(e)=>{
        e.preventDefault()
        let info = {
          name: e.target.name.value,
          email: e.target.email.value,
          pass: e.target.pass.value,
          number: e.target.number.value
        }
        setValue(info)
        console.log(value)
      }}>
        <label htmlFor="name">enter your name</label><br />
        <input type="text" id='name' className='border' name='name'/><br /><br />

        <label htmlFor="email">enter your email</label><br />
        <input type="email" id='email' className='border' name='email'/><br /><br />

        <label htmlFor="pass">enter your password</label><br />
        <input type="password"  className='border' id="pass" name='pass'/><br /><br />

        <label htmlFor="number">enter your phone number</label><br />
        <input type="number" className='border' id='number' name='number'/><br /><br />

        <input type="submit" className='border bg-gray-300 cursor-pointer'/>
      </form>
    </>
  )
}

export default App
