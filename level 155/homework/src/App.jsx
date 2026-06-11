import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register from './Register'
import NumberGuesser from './NumberGuesser'
function App() {

  return (
    <>
      <div>
        <h1 className='text-7xl'>homework 4</h1>
        <hr />
        <Register/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 5</h1>
        <hr />
        <NumberGuesser/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
    </>
  )
}

export default App
