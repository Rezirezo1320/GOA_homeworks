import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toast from './Toast'
import Username from './Username'
import FontSizeAdjuster from './FontSizeAdjuster'
import NumberGuesser from './NumberGuesser'
function App() {

  return (
    <>
      <div>
        <h1 className='text-7xl'>homework 1</h1>
        <hr />
        <Toast content="niggers niggers niggers" expiresIn={3000} background="#f00"  func={(a)=>{}}/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
      <h1 className='text-7xl'>homework 2</h1>
        <hr />
        <Username/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
      <h1 className='text-7xl'>homework 3</h1>
        <hr />
        <FontSizeAdjuster/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
      <h1 className='text-7xl'>homework 4</h1>
        <hr />
        <NumberGuesser/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
    </>
  )
}

export default App
