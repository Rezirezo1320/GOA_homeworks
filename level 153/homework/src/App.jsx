import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AgeChecker from './AgeChecker'
import ColorPicker from './ColorPicker'
import PasswordInput from './PasswordInput'
import CharCounter from './CharCounter'
import TemperatureConverter from './TemperatureConverter'
function App() {

  return (
    <>
      <div>
        <h1 className='text-7xl'>homework 1</h1>
        <hr />
        <AgeChecker/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 2</h1>
        <hr />
        <ColorPicker/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 3</h1>
        <hr />
        <PasswordInput/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 4</h1>
        <hr />
        <CharCounter/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr />
      <div>
        <h1 className='text-7xl'>homework 5</h1>
        <hr />
        <TemperatureConverter/>
        <br />
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr />
    </>
  )
}

export default App
