import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [name, setName] = useState()

  return (
    <>
      <div className='flex flex-col items-center justify-center  gap-2 border w-70 h-70'>
        <button  className='w-50 h-10 text-3xl border bg-yellow-400 cursor-pointer hover:bg-yellow-200 transition'onClick={()=>{
          setName("Aleksandre dzukaevi")
        }}>Reveal name</button>
        <h1 className='text-5xl'>{name}</h1>
      </div>
    </>
  )
}

export default App
