import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  useEffect(()=>{
    if (name.length >= 12){
      console.log("correct Name")
    }else{
      console.log("invalid name")
    }
    if (age >= 18){
      console.log("correct age")
      return
    }else {
      console.log("invalid age")
    }
  }, [name, age])
  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault()
        setName(e.target.name.value)
        setAge(Number(e.target.age.value))
      }}>
        <input type="text" name="name" className='border' required/>
        <input type="number" name="age" className='border' required/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
