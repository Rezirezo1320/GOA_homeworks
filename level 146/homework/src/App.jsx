import { useState } from 'react'
import viteLogo from '/vite.svg'
import Greeting from './Greeting'
import Product from './Product'
import DrawRec from './DrawRec'
function App() {

  return (
    <>
      <h1 className='text-7xl'>Homework 3</h1>
      <Greeting name="Aleksandre"/>
      <Greeting name="Ana"/>
      <Greeting name="Giorgi"/>
      <Greeting name="Elene"/>
      <h1 className='text-7xl'>Homework 4</h1>
      <Product title="vite1" price="$100000000000"  image="/vite.svg"/>
      <Product title="vite2" price="$200000000000"  image="/vite.svg"/>
      <Product title="vite3" price="$300000000000"  image="/vite.svg"/>
      <h1 className='text-7xl'>Homework 5</h1>
      <DrawRec color="#f00" width="300" height="300"/>
    </>
  )
}

export default App
