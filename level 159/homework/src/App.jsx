import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
function App() {

  return (
    <>
      <div>
        <h1 className='text-7xl'>homework 4</h1>
        <hr />
        <Comp1/>
        <br />
      </div><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 5</h1>
        <hr />
        <Comp2/>
        <br />
      </div><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 6</h1>
        <hr />
        <Comp3/>
        <br />
      </div><hr /><hr /><hr /><hr /><hr /><hr />
    </>
  )
}

export default App
